import styled from 'styled-components';
import img from '../images/portfolio2.PNG';
import headerimg from '../images/header2.PNG';
import cont from '../images/contact2.jpg';
import rut from '../images/rutgerse.PNG';
import cert from '../images/certy.PNG';
export const StyledImgHeader = styled.div`
width: 15%;
height: 9.5%;
background-image: url(${headerimg}) ;


Z-index: 1;

border-radius: 0px 100px 100px 0px;

position: absolute;
top: 3;
left: 2;
margin-top: -97vh;
cursor: pointer;

`;
export const StyledHeader = styled.div`
width: 15%;
height: 8%;
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 1.2rem;
z-index: 1;
margin-left: 45%;
border-radius: 0px 100px 100px 0px;
position: absolute; 
cursor: pointer;
top: 3;
left: ${(props) => props.index * 13}%; /* Add this line to set the left value based on the index */
margin-top: -93vh;
hover: {
    color: #000;
    }
    


`;
export const StyledMainLeft = styled.div`
    width: 32%;
    height: 100vh;
    background-color: #0D395C;
    
    border: 1px solid #000;
    border-radius: 0 0 0 0;
    box-shadow: 0 0 0 0;
    display: flex;
    Z-index: -1;
 
`;



export const StyledMain = styled.div`
    width: 100%;
    height: 100vh;
    dipplay: flex;
    background-color: #E0D865;
    Z-index: -1;
    
    `;

    export const StyledImg = styled.div`
    width: 38%;
    height:43%;
    background-image: url(${img}) ;
    box-shadow: 5px 10px 10px 5px;
   
    Z-index: 1;
    margin-top: -38%;
    margin-left: 15%;
    
    `;

export const StyledMainAbout = styled.div`
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 2.5rem;
letter-spacing: 0.7px;
color:#ffffff;
width: 35%;


margin-top: -50vh;
margin-left: 105vh;
z-index: 1;
`;
   

//contact me

export const StyledImgContact = styled.div`
width: 30%;
height:50%;
background-image: url(${cont}) ;
box-shadow: 5px 10px 10px 5px;

Z-index: 1;
margin-top: -40%;
margin-left: 15%;
border-radius: 100px 100px 100px 100px;

`;
export const StyledResume = styled.div`
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 2.5rem;
letter-spacing: 0.7px;
color:#ffffff;



margin-top: -75vh;
margin-left: 75vh;
z-index: 1;
`;


export const StyledImgRut = styled.div`
width: 28.5%;
height:42%;
background-image: url(${rut}) ;
box-shadow: 5px 10px 10px 5px;

Z-index: 1;
margin-top: -25%;
margin-left: 7%;


`;
export const StyledImgCert = styled.div`
width: 28.5%;
height:42%;
background-image: url(${cert}) ;
box-shadow: 5px 10px 10px 5px;

Z-index: 1;
margin-top: -50%;
margin-left: 7%;


`;