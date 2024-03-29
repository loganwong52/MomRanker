// getRecords.js - Fetches Kintone records, transforms response, & returns array of list items

/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.Record_number.value = value of the Record number field (unique key for the record)
 */

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = 'http://localhost:5000/getData';

export default async function getOneRandom() {
    const response = await fetch(getRecordsEndpoint);
    const jsonResponse = await response.json();
    console.log("jsonResponse:", jsonResponse);

    let uniqueKey, name, photo, alt, src, rating;

    // Map (1->1 transform) an array of records from the formatted API response to an array of list items
    const ListItemArray = jsonResponse.records

    let randomNum = Math.floor(Math.random() * ListItemArray.length)
    console.log("Random Number: ", randomNum)
    let record = ListItemArray[randomNum]

    console.log(record)

    uniqueKey = record.Record_number.value;
    name = record.name.value;
    photo = new Image();
    // photo.src = record.photo.value[0].name;
    alt = "photo of " + name;
    src = "https://momain.kintone.com/k/v1/file.json?filekey=" + record.photo.value[0].fileKey;
    photo.src = src;
    rating = record.rating.value

    // console.log("record.photo type: ", typeof (record.photo))
    // console.log("photo name: ", record.photo.value[0]);
    console.log("Single random photo name: ", record.photo.value[0].fileKey);
    // console.log("photo: ", photo);
    console.log("Single random photo.src: ", src);


    return (
        <li key={uniqueKey}>
            <b>{name}</b>
            <img src={src}></img>
            <b>{rating}</b>
        </li >
    )
};