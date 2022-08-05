import React from 'react'
import { useState } from 'react';

export const FilterDropdown = ({ sectionsSummary, setChosen }) => {
    if(Object.keys(sectionsSummary).length){
        const dropDownOptions = Object.keys(sectionsSummary).map(section => <option key={section} value={section} >{section}</option>)
        console.log(dropDownOptions)
        return (
           <select onChange={(event) => setChosen(event.target.value)}>
                {dropDownOptions}
           </select>
        )
    }
    
        
}