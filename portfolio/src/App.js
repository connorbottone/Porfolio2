import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { StyledMainLeft,StyledHeader, StyledImg,StyledMain,StyledMainAbout,StyledImgHeader } from './styles/StyledMian';
 import Main from './pages/Main';
 import Contactme from './pages/Contactme';
 import Resume  from './pages/Resume';
const nav = ["Aboutme", "Portfolio", "Contactme", "Resume" ]


function App() {
  const [currentPage, setCurrentPage] = useState("Main");
  return (
    <div>
    {currentPage === "Main" && <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    {currentPage === "Contactme" && <Contactme currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    {currentPage === "Resume" && <Resume currentPage={currentPage} setCurrentPage={setCurrentPage} />}

    </div>
  );
}

export default App;
