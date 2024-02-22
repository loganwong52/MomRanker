// import { useState, } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App


// App.js - Parent React Component - Combines the list & form components

// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';

// Import the script to make GET API calls
import getRecords from './requests/getRecords.jsx';

// Import the list & form components
import ListRecords from './components/ListRecords.jsx'
import InputForm from './components/InputForm.jsx'

function App() {

  // Establish useState by giving it our initial state
  // const [state, setState] = useState(initialState);
  const [listItems, setListItems] = useState('*** now loading ***');

  // useEffect takes 2 arguments:
  // 1st = a function, called effect, that is executed when the React Component is rendered
  // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

  useEffect(() => {
    getRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    // JSX includes html-like syntax
    <div className="App">
      <p>
        Hello world
      </p>

      <ListRecords list={listItems} />
      <InputForm setListItems={setListItems} /> {/* Form Component Appended */}
    </div>
  );
}

export default App;