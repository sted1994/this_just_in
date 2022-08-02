import React from 'react';
import { Story } from "./Story"

export const StoriesContainer = ({getStories, topStories}) => {
    {getStories()}
    if(topStories.length){
        const stories = topStories.map(story => <Story story={story}/>)
        return (
            <>
                {stories}
            </>
           ) 
    }
}