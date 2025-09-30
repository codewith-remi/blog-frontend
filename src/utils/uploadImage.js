import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

// const uploadImage = async (imageFile) => {
//   const formData = new FormData();
//   formData.append('image', imageFile);

//   try {
//     const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     });

//     // Return only the URL
//     return response.data.secure_url; 
//   } catch (error) {
//     console.log('Error uploading image', error);
//     throw error;
//   }
// }

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    console.log("Upload response:", response.data); // Vérifie ce qui est renvoyé

    // Utilise la bonne propriété
    return response.data.imageUrl; 
  } catch (error) {
    console.log('Error uploading image', error);
    throw error;
  }
}



export default uploadImage