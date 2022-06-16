import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";

export default function DeleteRecipe(props) {


  const handleDelete = (id) => {
    axios.delete(`/api/recipes/${id}`)
      .then(result => {
        
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <button className="bg-oatmeal text-sunset pt-2 pb-2 pl-5 pr-5
       rounded-full" onClick={() => { handleDelete() }}>Delete</button>
    </>
  )
}