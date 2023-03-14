import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { StyledMainLeft,StyledHeader, StyledImg,StyledMain,StyledMainAbout,StyledImgHeader } from './styles/StyledMian';
 import Main from './pages/Main';
const nav = ["Aboutme", "Portfolio", "Contactme", "Resume" ]


function App() {
  const [currentPage, setCurrentPage] = useState("Main");
  return (
    <div>
    {currentPage === "Main" && <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
