// ListRecords.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React elements

export default function ListRecords(props) {

    return (
        <div>
            <h1>React App</h1>
            <ul>{props.list}</ul>
        </div>
    );
};