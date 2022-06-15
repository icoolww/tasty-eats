import React from "react";
import { useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";

export default function CreateRecipe() {
  const [image, setImage] = useState(null)
  const [inputs, setInputs] = useState({});
  const [progress, setProgress] = useState(0);

  
  //sets the value of the inputs when they are changed 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

//function for when the submit is clicked
const handleSubmit = (e) => {
e.preventDefault();
// axios.post("/api/create")
console.log(inputs);
}

//image upload
const handleImageChange = (e) => {
e.preventDefault();
const image = e.target.files[0]
handleUpload(image);
}

const handleUpload = (image) => {
if(!image) return;
const storageRef = ref(storage, `/images/${image.name}`)
const uploadTask = uploadBytesResumable(storageRef, image)

uploadTask.on(
  "state_changed", 
(snapshot) => {
  const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  setProgress(prog);
}, (err) => {
  console.log(err)
},
()=> {
getDownloadURL(uploadTask.snapshot.ref).then( url => setImage(url))
})
}
  console.log(image)
return (
    <>
    {/* <h1 className="text-charcoal font-medium mb-10">Create your recipe below</h1> */}
    <form className="bg-sunset p-10 m-10 w-1/2 rounded-[20px] outline outline-offset-0 outline-2 outline-charcoal" onSubmit={handleSubmit}>
    
    
    <fieldset>
         <label>
           <p>Upload a recipe image</p>
           <input type="file" className="bg-oatmeal p-2 rounded-md mb-5" name="image" value={inputs.image} onChange={handleImageChange} />
           <button className="bg-oatmeal p-3 m-1 rounded-md"  type="submit" onClick={handleUpload}>upload</button>
           <h3>uploaded {progress}</h3>
         </label>
       </fieldset>

<fieldset>
         <label>
           {/* <p>Recipe Title</p> */}
           <input className="bg-oatmeal p-2 rounded-md mb-5"  placeholder="recipe title" name="title" value={inputs.title || ""}  onChange={handleChange} />
         </label>
       </fieldset>
       <fieldset>
         <label>
           {/* <p>Prep Time</p> */}
           <input className="bg-oatmeal p-2 rounded-md mb-5"  placeholder="Prep time" name="prep_time" value={inputs.prep_time || ""}  onChange={handleChange} />
         </label>
       </fieldset>
       <fieldset>
         <label>
           {/* <p>Portion Size</p> */}
           <input className="bg-oatmeal p-2 rounded-md mb-5"  placeholder="Portion size" name="portion" value={inputs.portion || ""}  onChange={handleChange} />
         </label>
       </fieldset>
       <fieldset>
         <label>
           {/* <p>Ingredients/p> */}
           <textarea className="bg-oatmeal p-2 rounded-md mb-5 w-full " placeholder="Ingredients" name="ingredients" value={inputs.ingredients || ""} onChange={handleChange} />
         </label>
       </fieldset>
       <fieldset>
         <label>
           {/* <p>Directions/p> */}
           <textarea className="bg-oatmeal p-2 rounded-md mb-5 w-full "  placeholder="Directions" name="directions" onChange={handleChange} />
         </label>
       </fieldset>
      
       <button className="bg-oatmeal p-3 w-40 rounded-md" type="submit">Save</button>

    </form>
    </>
  )
}