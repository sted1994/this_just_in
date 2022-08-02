import React from "react"

export const Story = ({ story }) => {
    console.log(story.published_date)

    const formatDate = (date) => {
        return `${date.split("-")[2].slice(0,2)}/${date.split("-")[1]}/${date.split("-")[0]}`
    }
   return (
    <>
        <h3>{story.title}</h3>
        <img src={story.multimedia[0].url} />
        <p>{story.abstract}</p>
        <section>
            <p>Published: {formatDate(story.published_date)}</p>
            <p>Last Updated: {formatDate(story.published_date)}</p>
        </section>
    </>
   ) 
}