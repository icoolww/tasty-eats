import { storage } from "./firebase";
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import axios from "axios";



function App() {

  useEffect(() => {
    axios.get(`/api`).then(
      (res) => {
        console.log("response", res)
      }
    )
  }, []);


  return (
    <div className="bg-oatmeal App">
      
      <Header />
    </div>
  );
}



export default App;
