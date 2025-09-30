import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../Context/UserContext'

import AUTH_IMG from '../../assets/logo.svg'
import Input from '../Inputs/Input'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../Inputs/ProfilePhotoSelector'
import uploadImage from '../../utils/uploadImage'
import toast from 'react-hot-toast'

const SignUp = ({setCurrentPage}) => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminAccessToken, setAdminAccessToken] = useState("");

  const [error, setError] = useState(null);

  const { updateUser, setOpenAuthForm } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle SignUp Form Submit

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullName){
      // setError("Please enter full name");
      toast.success("Please enter full name")
      return;
    }

    if(!validateEmail(email)){
      // setError("Please enter a valid email address");
      toast.success("Please enter a valid email address")
      return;
    }

    if(!password){
      // setError("Please enter the password");
      toast.success("Please enter the password")
    }

    setError("");

    //SignUp API Call

    try{

      // Upload image if present

      // if(profilePic){
      //   const imgUploadRes = await uploadImage(profilePic);
      //   profileImageUrl = imgUploadRes.imageUrl || "";
      // }

      if(profilePic){
        profileImageUrl = await uploadImage(profilePic); 
        console.log("Uploaded Image URL:", profileImageUrl); // Devrait afficher l'URL Cloudinary
      }
      



      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
        adminAccessToken
      })

      const { token, role } = response.data;

      if(token){
        localStorage.setItem("token", token);
        updateUser(response.data)

        // Redirect based on role

        if(role === "admin"){
          setOpenAuthForm(false);
          navigate("/admin/dashboard");
          
        }

        navigate("/");
        setOpenAuthForm(false)
      }
      
    }catch(error){
      
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }else{
        setError("Something went wrong. Please try again")
        
      }
    }
  }
  




  return (
    <div className="flex items-center h-auto md:h-[520px]">
      <div className="w-[90vw] md:w-[43vw] p-7 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below</p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input 
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Remi Dev"
              type="text"
            />
            <Input 
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="remi@example.com"
              type="text"
            />
            <Input 
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
            <Input 
              value={adminAccessToken}
              onChange={({ target }) => setAdminAccessToken(target.value)}
              label="Admin Invite Token"
              placeholder="6 Digit Code"
              type="number"
            />
          </div>
          
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">SIGN UP</button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an Account?{" "}
            <button 
              className="font-medium text-blue-500 underline cursor-pointer"
              onClick={() =>{
                setCurrentPage("login")
              }}
            >
              Login
            </button>
          </p>
        </form>
      </div>

      <div className="hidden md:block">
        <img src={AUTH_IMG} alt="Login" className="h-[520px] w-[33vw]" />
      </div>
    </div>
  )
}

export default SignUp