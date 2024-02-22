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

    function buttonClick(name, photo) {
        postRecord(name, photo)
            .then(() => getRecords())
            .then(result => props.setListItems(result))
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handlePhotoChange(event) {
        setPhoto(event.target.value);
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
                <div>
                    <label>Photo: </label>

                    {/* <input
                        type="image"
                        value={photo}
                        onChange={handlePhotoChange}
                    /> */}
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />

                </div>
                <button type="button" onClick={() => buttonClick(name, photo)}>Send it</button>
            </form>
        </div>
    );

    // - - - - - - - END - - - - - - - - -
};
export default InputForm;