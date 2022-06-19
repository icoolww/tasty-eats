import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";

export default function CreateRecipe(props) {
  const [image, setImage] = useState(props.recipe?.image || null)
  const [progress, setProgress] = useState(null);
  const [data, setData] = useState("")
  const [title, setTitle] = useState(props.recipe?.title || "");
  const [category_id, setCategoryId] = useState(props.recipe?.category_id || "");
  const [prep_time, setPrepTime] = useState(props.recipe?.prep_time || "");
  const [difficulty, setDifficulty] = useState(props.recipe?.difficulty || "");
  const [portion_size, setPortionSize] = useState(props.recipe?.portion_size || "");
  const [ingredient, setIngredients] = useState(props.recipe?.ingredient || "");
  const [directions, setDirections] = useState(props.recipe?.directions || "");

  useEffect(() => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        const data = res.data;
      setData(data);
      // console.log(data)
    })

  }, []);


  useEffect(() => {
   
    if (!props.recipe) {
      setCategoryId("")
      setDifficulty("")
      setDirections("")
      setImage(null)
      setIngredients("")
      setPrepTime("")
      setTitle("")
      setPortionSize("")
      
    }
    

  }, [props.recipe]);



  //function for when the submit is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (props.recipe) {
    // }
      handleUpload(image)

  }

  //image upload
  const handleImageChange = (e) => {
    e.preventDefault();
    const newImage = e.target.files[0]
    setImage(newImage)

  }

  const handleUpload = (image) => {
    if (!image) return;
    const storageRef = ref(storage, `/images/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    return uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(prog);
      }, (err) => {
        console.log(err)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          const newRecipeBody = {
            image: url,
            title,
            prep_time,
            portion_size,
            directions,
            ingredient,
            user_id: 1,
            category_id,
            difficulty
          } 
          if (props.recipe) {
            axios.put(`/api/recipes/${props.recipe.id}`, newRecipeBody)
            .then(result => {
            console.log(result)
             
            })
            .catch(err => console.error(err));
          
          } else {
            axios.post("/api/recipes", newRecipeBody)
            .then((newRecipe) => console.log("recipe created", newRecipe))
          }
          
        })
      })
  }

  return (
    <div className=" w-[700px] ml-20 mt-5">
      <h1 className="text-charcoal font-medium mb-10 text-2xl">Create your recipe below</h1>
      <form 
      className="bg-sunset p-10 m-10 rounded-[20px] outline outline-offset-0 outline-2 
      outline-charcoal" 
      onSubmit={handleSubmit}
      // w-1/2
      >


        <fieldset>
          <label>
            <p>Upload a recipe image</p>
            {(props.recipe) && <><img src={props.recipe.image} alt=""></img><input type="file" className="bg-oatmeal p-2 rounded-md mb-5" name="image" onChange={handleImageChange} /></>}
            
            {(!props.recipe) && <input type="file" className="bg-oatmeal p-2 rounded-md mb-5" name="image" onChange={handleImageChange} />}
            

            {progress && <p className="text-md text-oatmeal pb-2">uploaded {progress}</p>}
          </label>
        </fieldset>

        <fieldset>
          <label>
            {/* <p>Recipe Title</p> */}
            <input className="bg-oatmeal p-2 rounded-md mb-5" placeholder="recipe title" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Category:
            <select className="ml-2 mb-5 rounded-md bg-oatmeal" value={category_id} onChange={(e) => { setCategoryId(e.target.value) }}>
            <option value="">Select an option</option>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <label>
            {/* <p>Prep Time</p> */}
            <input className="bg-oatmeal p-2 rounded-md mb-5" placeholder="Prep time" name="prep_time" value={prep_time} onChange={(e) => { setPrepTime(e.target.value) }} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            {/* <p>Difficulty</p> */}
            <input className="bg-oatmeal p-2 rounded-md mb-5" placeholder="Difficulty" name="difficulty" value={difficulty} onChange={(e) => { setDifficulty(e.target.value) }} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            {/* <p>Portion Size</p> */}
            <input className="bg-oatmeal p-2 rounded-md mb-5" placeholder="Portion size" name="portion" value={portion_size} onChange={(e) => { setPortionSize(e.target.value) }} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            {/* <p>Ingredients/p> */}
            <textarea className="bg-oatmeal p-2 rounded-md mb-5 w-full " placeholder="Ingredients" name="ingredients" value={ingredient} onChange={(e) => { setIngredients(e.target.value) }} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            {/* <p>Directions/p> */}
            <textarea className="bg-oatmeal p-2 rounded-md mb-5 w-full " placeholder="Directions" name="directions" value={directions} onChange={(e) => { setDirections(e.target.value) }} />
          </label>
        </fieldset>
        <button className="bg-oatmeal p-3 w-40 rounded-md" type="submit" >Save</button>

      </form>
    </div>
  )
}