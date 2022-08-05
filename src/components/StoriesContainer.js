import React from 'react';
import { Story } from "./Story"
import "../style/storyContainer.css"

export const StoriesContainer = ({getStories, topStories, setChosen}) => {
    {getStories()}
    if(topStories.length){
        const stories = topStories.map(story => <Story setChosen={setChosen} key={story.url} story={story}/>)
        return (
            <>
                <h2>Top Stories</h2>
                <div className="storyContainer">
                    {stories}
                </div>
            </>  
           ) 
    }
}