import { useForm } from "react-hook-form"
import axios from 'axios'

export function FileUpload(){
 const{register,handleSubmit,formState:{errors}}=useForm()

  
  async function submit(data) {
    const formData = new FormData();
    formData.append("file", data.fileupload[0]); // fileupload is an array

    try {
      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Upload Success:", response.data);
      alert("Uploaded Success")
    } catch (error) {
      console.error("Upload Error:", error);
    }
  }

    return(
        <div className="border border-1 p-3 m-4">
         <form encType="multipart/form-data" onSubmit={handleSubmit(submit)}>
          
          <label htmlFor="fileupload">fileupload</label>
          <input id="fileupload" type="file" {...register('fileupload',{required:"file is required"})}/>
          <div className="text-danger">{errors.fileupload && errors.fileupload.message}</div>

          <button className="btn btn-warning">Submit</button>
         </form>
        </div>
    )
}