import {v2} from "cloudinary"
import fs from "fs"


v2.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload file on cloudenary
       const response= await v2.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        console.log("file is uploaded on cloudinary",response.url)
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation got failed
        return null;

        
    }

}
export {uploadOnCloudinary}