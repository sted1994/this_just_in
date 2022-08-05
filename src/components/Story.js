import React from "react"
import { Link } from 'react-router-dom'
import "../style/story.css"

export const Story = ({ story, setChosen }) => {
    const formatDate = (date) => {
        return `${date.split("-")[2].slice(0,2)}/${date.split("-")[1]}/${date.split("-")[0]}`
    }

   return (
    <Link  to={`/${story.title.split(" ").join("")}`}> 
    <div onClick={() => { setChosen(story)}} className="story-card" >
        <h3>{story.title}</h3>
        <img className="story_img" src={story.multimedia[0].url} />
    </div>
    </Link>
   ) 
}