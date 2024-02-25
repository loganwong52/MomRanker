// Import required files
import React, { useState } from 'react';

import postOneRecord from '../requests/postOneRecord.jsx';


export default function RatingButtons({ record, setRating, setRecord }) {

    const buttonClick = (event) => {
        // setRating(event)
        // Update rating
        postOneRecord(event)
        // Shuffle
        setRecord(null)
    }

    return (
        <div>
            <ul>{record}</ul>

            <button type="button" onClick={() => buttonClick(1)}>{1}</button>
            <button type="button" onClick={() => buttonClick(2)}>{2}</button>
            <button type="button" onClick={() => buttonClick(3)}>{3}</button>
            <button type="button" onClick={() => buttonClick(4)}>{4}</button>
            <button type="button" onClick={() => buttonClick(5)}>{5}</button>
            <button type="button" onClick={() => buttonClick(6)}>{6}</button>
            <button type="button" onClick={() => buttonClick(7)}>{7}</button>
            <button type="button" onClick={() => buttonClick(8)}>{8}</button>
            <button type="button" onClick={() => buttonClick(9)}>{9}</button>
            <button type="button" onClick={() => buttonClick(10)}>{10}</button>

            <div>
                <button type="button" onClick={() => setRecord(null)}>Shuffle</button>
            </div>

        </div>

    )

}