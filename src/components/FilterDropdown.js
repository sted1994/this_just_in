import React from 'react'
import { useState } from 'react';

export const FilterDropdown = ({ sectionsSummary, setFilterSelection }) => {
    if(Object.keys(sectionsSummary).length){
        const dropDownOptions = Object.keys(sectionsSummary).map(section => <option key={section} value={section} >{section}</option>)
        return (
           <select onChange={(event) => setFilterSelection(event.target.value)}>
            <option value="">-- All Top Stories --</option>
                {dropDownOptions}
           </select>
        )
    }
    
        
}