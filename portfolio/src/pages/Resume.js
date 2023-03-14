import  resume from "../resume/resume.pdf";
import React,{useState} from 'react';
import "../styles/resume.css";
import { StyledMainLeft,StyledHeader,StyledImgCert,StyledImgRut, StyledResume,StyledMain,StyledMainAbout,StyledImgHeader } from '../styles/StyledMian';
import apollo from "../images/appollo.png"
import react from "../images/react.jpg"
import mongo from "../images/mongo.gif"
import java from "../images/java.jpg"
import node from "../images/node.png"
import sql from "../images/sql.jpg"
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
const nav = ["Aboutme", "Portfolio", "Contactme", "Resume" ]

const Resume = ({currentPage,setCurrentPage}) => {
    return (
        <div>
        <StyledMain>

        <StyledMainLeft>
          
        </StyledMainLeft>
    
        <StyledImgHeader onClick={()=>setCurrentPage("Main")}/>
    {
    nav.map((item, index) => {
      return <StyledHeader index={index} onClick={()=>setCurrentPage(item)}>{item}</StyledHeader>;
    })  
    
    }
    <StyledImgRut/>
    
        <StyledResume >
         <object data={resume} type="application/pdf" width="1000px" height="1720px">
        <p>
          It appears your browser doesn't support PDFs. You can download the
          PDF file{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>
      </object>
      <br />
     
    </StyledResume>
    </StyledMain>
    <StyledMain>

    <StyledMainLeft>
      
    </StyledMainLeft>
    <StyledImgCert/>
    <div class="card-outer2">
              
              <img src={apollo} alt="Your Image" className="skills" />
              <img src={react} alt="Your Image" className="skills" />
              <img src={mongo} alt="Your Image" className="skills" />
              <img src={java} alt="Your Image" className="skills" />
              <img src={node} alt="Your Image" className="skills" />
              <img src={sql} alt="Your Image" className="skills" />
              <img src={bootstrap} alt="Your Image" className="skills" />
              <img src={git} alt="Your Image" className="skills" />
            </div>
    </StyledMain>
    </div>
    );
}
export default Resume;