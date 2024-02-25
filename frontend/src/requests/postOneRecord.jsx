// postRecord.js - Passes the POST API request from React to Express server

// Connect with the Express server
const addRecordEndpoint = 'http://localhost:5000/postData';

export default async function postOneRecord(rating) {

    /* Pass the POST API request from React to Express server */
    // - - - - - - - START - - - - - - - -

    const recordBodyParameters = {
        'rating': rating
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recordBodyParameters)
    }

    const response = await fetch(addRecordEndpoint, options);
    const jsonResponse = await response.json();

    console.log(JSON.stringify(jsonResponse));

    return jsonResponse;

    // - - - - - - - END - - - - - - - - -
};