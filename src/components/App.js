import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import { HomeView } from '../Views/Home'
import { StoryDetails } from '../Views/StoryDetails'
import { apiCalls } from "../scripts/apiCalls"
import '../style/App.css';

export const App = () => {
  const [topStories, setTopStories] = useState([])
  const [chosenAtricle, setChosenArticle] = useState(null)
  
  const getStories = () => {
    if(!topStories.length){
      Promise.all([apiCalls.topStories()])
        .then(res => res)
        .then(data => setTopStories(data[0].results))
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={<HomeView setChosen={setChosenArticle} getStories={getStories} topStories={topStories}/>}/>
      <Route path="/:id" element={<StoryDetails story={chosenAtricle} topStories={topStories}/>}/>
    </Routes>
  );
}

