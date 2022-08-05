import React from 'react';
import { useState, useEffect } from 'react';
import { StoriesContainer } from "../components/StoriesContainer"
import { FilterDropdown } from "../components/./FilterDropdown"
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import '../style/homeView.css';
import {apiCalls} from "../scripts/apiCalls"

export const HomeView = ({getStories, topStories, setChosen}) =>{
    return (
        <div className="App">
            <h1>This Just In!</h1>
            <FilterDropdown/>
            <StoriesContainer setChosen={setChosen} getStories={getStories} topStories={topStories}/>
        </div>
    )
}