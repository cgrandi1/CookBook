import React from 'react'
import RecipeListing from '../components/RecipeListing'


export default function HomePage(props) {
    return(
        <div>
            <h2>Home Page</h2>
            <RecipeListing recipes={data.recipes} />
        </div>
    )
}