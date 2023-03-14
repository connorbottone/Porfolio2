import styled from 'styled-components';
import img from '../images/portfolio2.PNG';

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
    height: 43%;
    background-image: url(${img}) ;
    box-shadow: 5px 10px 10px 5px;
   
    Z-index: 1;
    margin-top: -38%;
    margin-left: 15%;
    ma
    `;

export const StyledMainAbout = styled.div`
font-family: Mosk,sans-serif;
font-size: 5.5rem;
letter-spacing: 0.7px;
color:#ffffff;
width: 35%;


margin-top: -50vh;
margin-left: 110vh;
z-index: 1;
`;
   