import React from 'react';
import { useState, useEffect } from 'react';
import { StoriesContainer } from "../components/StoriesContainer"
import { FilterDropdown } from "../components/./FilterDropdown"
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import '../style/homeView.css';
import {apiCalls} from "../scripts/apiCalls"

export const HomeView = ({ getStories, topStories, setChosen, setFilterSelection , sectionsSummary}) =>{
    return (
        <div className="App">
            <h1>This Just In!</h1>
            <FilterDropdown sectionsSummary={sectionsSummary} setChosen={setChosen} setFilterSelection={setFilterSelection} topStories={topStories}/>
            <StoriesContainer setChosen={setChosen} getStories={getStories} topStories={topStories}/>
        </div>
    )
}