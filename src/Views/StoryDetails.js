import React from "react"
import { Link } from 'react-router-dom'

export const StoryDetails = ({ story }) => {
    const formatDate = (date) => {
        return `${date.split("-")[2].slice(0,2)}/${date.split("-")[1]}/${date.split("-")[0]}`
    }

   return (
    <div className="story-card">
        <h3>{story.title}</h3>
            <img className="story_img" src={story.multimedia[2].url} />
            <p>{story.abstract}</p>
            <section>
                <p>Published: {formatDate(story.published_date)}</p>
                <p>Last Updated: {formatDate(story.published_date)}</p>
            </section>   
            <p>To read this article on the NYT click {<Link to="" onClick={() => {window.location.href = story.url}}>here</Link>}</p>
    </div>
   ) 
}