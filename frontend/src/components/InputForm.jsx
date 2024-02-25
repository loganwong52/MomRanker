// InputForm.js - Form component - Create a form that submits a POST request

// Import required files
import React, { useState } from 'react';

import getRecords from '../requests/getRecords.jsx';
import postRecord from '../requests/postRecord.jsx';

function InputForm(props) {

    /* Create the component that submits a POST request */
    // - - - - - - - START - - - - - - - -

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    function buttonClick(name, photo) {
        postRecord(name, photo)
            .then(() => getRecords())
            .then(result => props.setListItems(result))
    }

    function handleNameChange(event) {
        if (event.target.value.length > 0 & photo.length > 0) {
            // Enable button
            setIsButtonDisabled(false)
        }
        else {
            // disable button
            setIsButtonDisabled(true)
        }

        setName(event.target.value);
    }
    function handlePhotoChange(event) {
        if (event.target.value.length > 0 & name.length > 0) {
            // Enable button
            setIsButtonDisabled(false)
        }
        else {
            // disable button
            setIsButtonDisabled(true)
        }
        setPhoto(event.target.value);
        console.log(event.target.value)
    }

    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input
                        type="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <label>Photo: </label>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />

                <div>
                    <button type="button" disabled={isButtonDisabled} onClick={() => buttonClick(name, photo)}>Send it</button>
                </div>
            </form>
        </div>
    );

    // - - - - - - - END - - - - - - - - -
};
export default InputForm;