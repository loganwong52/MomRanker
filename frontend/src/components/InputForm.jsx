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

    function handlenameChange(event) {
        setName(event.target.value);
    }
    function handlephotoChange(event) {
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
                        onChange={handlenameChange}
                    />
                </div>
                <div>
                    <label>Photo: </label>
                    <input
                        type="image"
                        value={photo}
                        onChange={handlephotoChange}
                    />
                </div>
                <button type="button" onClick={() => buttonClick(name, photo)}>Post to Kintone</button>
            </form>
        </div>
    );

    // - - - - - - - END - - - - - - - - -
};
export default InputForm;