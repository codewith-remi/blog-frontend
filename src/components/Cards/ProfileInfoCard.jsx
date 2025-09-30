import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import CharAvatar from './CharAvatar'

const ProfileInfoCard = () => {

  const { user, clearUser } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate("/")
  }

  return user && (
    <div className="flex items-center gap-2">
      {/* <img 
        src={user.profileImageUrl} 
        alt="" 
        className="w-11 h-11 bg-gray-300 rounded-full mr-3"
      /> */}
      {user?.profileImageUrl ? (
        <img
          src={user?.profileImageUrl || ""}
          alt='Profile Image'
          className='w-10 h-10 bg-slate-400 rounded-full'
        />
      ) : (
        <CharAvatar
          fullName={user?.name || ""}
          width="w-10"
          height="h-10"
          style="text-xl"
        />
      )}
      <div>
        <div className="text-[15px] text-black font-bold leading-3">
          {user.name || ""}
        </div>
        <button
          className="text-sky-600 text-sm font-semibold cursor-pointer hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfoCard