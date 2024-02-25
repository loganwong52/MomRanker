// App.js - Parent React Component - Combines the list & form components

// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import '../App.css'

// Import the script to make GET API calls
import getRecords from '../requests/getRecords.jsx';
import getOneRandom from '../requests/getOneRandom.jsx';


// Import the list & form components
import ListRecords from '../components/ListRecords.jsx'
import InputForm from '../components/InputForm.jsx'
import RatingButtons from '../components/RatingButtons.jsx';

function Upload() {

    // Establish useState by giving it our initial state
    // const [state, setState] = useState(initialState);
    const [listItems, setListItems] = useState('*** now loading ***');
    const [rating, setRating] = useState(10);
    const [record, setRecord] = useState(null);

    // useEffect takes 2 arguments:
    // 1st = a function, called effect, that is executed when the React Component is rendered
    // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

    useEffect(() => {
        getRecords().then(
            result => setListItems(result)
        );
    }, []);

    useEffect(() => {
        if (record == null) {
            getOneRandom().then(
                result => setRecord(result)
            )
        }
    })

    return (
        // JSX includes html-like syntax
        <div className="App">
            <div className="card">
                <ListRecords list={listItems} />
                <InputForm setListItems={setListItems} />

                <RatingButtons record={record} setRating={setRating} setRecord={setRecord} />
            </div>
        </div>
    );
}

export default Upload;