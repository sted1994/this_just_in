import React from "react"
import "../style/story.css"

export const Story = ({ story }) => {
    const formatDate = (date) => {
        return `${date.split("-")[2].slice(0,2)}/${date.split("-")[1]}/${date.split("-")[0]}`
    }
   return (
    <div className="story-card" onClick={() => {window.location.replace(story.url)}}>
        <h3>{story.title}</h3>
            <img className="story_img" src={story.multimedia[0].url} />
            <p>{story.abstract}</p>
            <section>
                <p>Published: {formatDate(story.published_date)}</p>
                <p>Last Updated: {formatDate(story.published_date)}</p>
            </section>   
    </div>
   ) 
}