import React from 'react';
import { Story } from "./Story"
import "../style/storyContainer.css"

export const StoriesContainer = ({getStories, topStories, setChosen, sectionsSummary, chosen, filterSelection}) => {
    {getStories()}
    if(topStories.length){
        
        let stories 
        console.log(filterSelection)
        if(!filterSelection){
            console.log("there")
           stories = topStories.map(story => <Story setChosen={setChosen} key={story.url} story={story}/>)
        } else {
            console.log("here")
            stories = sectionsSummary[filterSelection].map(story => <Story setChosen={setChosen} key={story.url} story={story}/>)

        }
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