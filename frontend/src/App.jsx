// Import navbar
import React from "react";
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Upload from "./pages/upload";
import Rate from "./pages/rate";

function App() {


  return (
    // JSX includes html-like syntax
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Upload />} />

          <Route path="/rate" element={<Rate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;