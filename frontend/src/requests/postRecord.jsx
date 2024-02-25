// postRecord.js - Passes the POST API request from React to Express server

// Connect with the Express server
const addRecordEndpoint = 'http://localhost:5000/postData';

export default async function postRecord(name, photo) {

    /* Pass the POST API request from React to Express server */
    // - - - - - - - START - - - - - - - -

    const recordBodyParameters = {
        'name': name,
        'photo': photo,
        'rating': 0,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': 'bGF3MzA4MkByaXQuZWR1Ok1vbWFpbjEyMzQh'

        },
        body: JSON.stringify(recordBodyParameters)
    }

    const response = await fetch(addRecordEndpoint, options);
    const jsonResponse = await response.json();

    console.log(JSON.stringify(jsonResponse));

    return jsonResponse;

    // - - - - - - - END - - - - - - - - -
};