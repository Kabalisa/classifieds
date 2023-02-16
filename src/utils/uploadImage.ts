import axios from "axios";

export const uploadImage = async (image: string) => {
  try {
    const URL = "https://api.cloudinary.com/v1_1/ds6iel7nb/image/upload";
    const form = new FormData();
    form.append("file", image);
    form.append("upload_preset", "classifieds");
    const { data } = await axios.post(URL, form, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    return data.secure_url;
  } catch (error: any) {
    if (error) {
      return null;
    }
  }
};
