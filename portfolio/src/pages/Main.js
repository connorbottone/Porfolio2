import React from 'react'
import { StyledMainLeft,StyledHeader, StyledImg,StyledMain,StyledMainAbout,StyledImgHeader } from '../styles/StyledMian';
 
const nav = ["Aboutme", "Portfolio", "Contactme", "Resume" ]

export default function Main({ currentPage, setCurrentPage }) {
  return (
    <StyledMain>

    <StyledMainLeft>
      
    </StyledMainLeft>

<StyledImgHeader/>
{
nav.map((item, index) => {
  return <StyledHeader index={index} onClick={()=>setCurrentPage(item)}>{item}</StyledHeader>;
})  

}

<StyledImg/>
<StyledMainAbout ><h1 className='txt'>I am fascinated by technogliy and all of its advanvtc ment looing to gr ow in the field</h1> </StyledMainAbout>    
</StyledMain>

  );
}
