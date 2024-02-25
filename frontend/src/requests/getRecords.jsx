// getRecords.js - Fetches Kintone records, transforms response, & returns array of list items

/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.Record_number.value = value of the Record number field (unique key for the record)
 */

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = 'http://localhost:5000/getData';

export default async function getRecords() {
    console.log("start of getRecords")
    const response = await fetch(getRecordsEndpoint);
    console.log("response: ", response)
    const jsonResponse = await response.json();

    console.log("got the json response!")
    console.log(jsonResponse);

    let uniqueKey, name, photo;

    // Map (1->1 transform) an array of records from the formatted API response to an array of list items
    const ListItemArray = jsonResponse.records.map(
        record => {
            uniqueKey = record.Record_number.value;
            name = record.name.value;
            photo = record.photo.value;

            return (
                <li key={uniqueKey}>
                    <b>{name}</b>
                    {photo}
                </li>
            )
        }
    );

    return ListItemArray;
};