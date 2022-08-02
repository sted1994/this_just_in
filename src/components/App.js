import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import '../style/App.css';
import {apiCalls} from "../scripts/apiCalls"

function App() {

  const [topStories, setTopStories] = useState([])

  const getStories = () => {
    if(!topStories.length){
      Promise.all([apiCalls.topStories()])
        .then(res => res)
        .then(data => setTopStories(data[0].results))
    }
  }

  return (
    <div className="App">
     {getStories()}
    </div>
  );
}

export default App;
