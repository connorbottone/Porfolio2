import styled from 'styled-components';
import img from '../images/portfolio2.PNG';
import headerimg from '../images/header2.PNG';

export const StyledImgHeader = styled.div`
width: 15%;
height: 8%;
background-image: url(${headerimg}) ;


Z-index: 1;

border-radius: 0px 100px 100px 0px;

position: absolute;
top: 3;
left: 2;
margin-top: -97vh;

`;
export const StyledHeader = styled.div`
width: 15%;
height: 8%;
z-index: 1;
margin-left: 45%;
border-radius: 0px 100px 100px 0px;
position: absolute; 
cursor: pointer;
top: 3;
left: ${(props) => props.index * 13}%; /* Add this line to set the left value based on the index */
margin-top: -93vh;



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
   