import React from 'react';
import { useState, useEffect } from 'react';
import { StoriesContainer } from "./StoriesContainer"
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import '../style/App.css';
import {apiCalls} from "../scripts/apiCalls"

export const App = () => {

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
      <h1>This Just In!</h1>
      <StoriesContainer getStories={getStories} topStories={topStories}/>
    </div>
  );
}

