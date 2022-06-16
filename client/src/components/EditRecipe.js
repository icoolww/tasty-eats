import React from "react";
import axios from "axios";

export default function EditRecipe() {

  const handleEdit = (id) => {
    axios.put(`/api/${id}`)
      .then(result => {
        
      })
      .catch(err => console.error(err));
  };

  return (
    <>
  <button className="bg-oatmeal text-sunset pt-2 pb-2 pl-5 pr-5
  rounded-full" onClick={handleEdit()}>Edit</button>
   </>
  )
}