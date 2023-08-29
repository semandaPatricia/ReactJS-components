import { useState } from "react";
//import React from 'react'
import './App.css'
//import Formm from './components/Formm'
/*import pizza from '../src/assets/olives.jpg'
import Card from './components/Card' */
/*import { SearchBar } from './components/search/Searchbar'
import { SearchResultList } from "./components/search/SearchResultList";*/
{/*import { createPortal } from "react-dom";
import { Modal } from "./components/modal/Modal";*/}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About, Contact, Home, Services } from "./pages";

//---CONTACT FORM---//
{/*
const App = () => {
  return (
    <Formm/>
  )
}

export default App
*/}


//-----CARD COMPONENT------//
{/*function App() {
  return (
    <div>
     <Card
        imgSrc={pizza}
        altText='olive pizza'
        title='Card Title'
        description='This is a card description. Add something in details here.'
        buttonText="Learn More"
        link='cardPage'
      />
       <Card
        imgSrc={pizza}
        altText='olive pizza'
        title='Card Title'
        description='This is a card description. Add something in details here.'
        buttonText="Learn More"
      />
       <Card
        imgSrc={pizza}
        altText='olive pizza'
        title='Card Title'
        description='This is a card description. Add something in details here.'
        buttonText="Learn More"
      />
       <Card
        imgSrc={pizza}
        altText='olive pizza'
        title='Card Title'
        description='This is a card description. Add something in details here.'
        buttonText="Learn More"
      />  
     
      
    </div>
  )
}

export default App
export { Card }
*/}

//----SEARCHBAR----//
{/* 
function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 ? <SearchResultList results={results} /> : <p>No results found</p>}
      </div>
    </div>
  );
}

export default App;
*/}

//---MODAL---//
{/* 
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Open
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1>This is a modal</h1>
            <br />
            <p>This is the modal description</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default App;
*/}

//---NAVBAR----//
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;





