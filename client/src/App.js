import { storage } from "./firebase";
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";
import axios from "axios";



function App() {

  useEffect(() => {
    axios.get(`/api`).then(
      (res) => {
        console.log("response", res.data)
       
      }
    )
  }, []);


  return (
    <div className="bg-oatmeal App">
      
      <Header />
      
      <RecipePreview />
    </div>
  );
}



export default App;
