import FormData from "../components/FormData";

import { StyledMainLeft,StyledHeader, StyledImgContact,StyledMain,StyledMainAbout,StyledImgHeader } from '../styles/StyledMian';
import'../styles/contactme.css'
const nav = ["Aboutme", "Portfolio", "Contactme", "Resume" ]

const ContactMe = ({ currentPage, setCurrentPage }) => {

   

    return (
        <StyledMain>

    <StyledMainLeft>
      
    </StyledMainLeft>

<StyledImgHeader onClick={()=>setCurrentPage("Main")}/>
{
nav.map((item, index) => {
  return <StyledHeader index={index} onClick={()=>setCurrentPage(item)}>{item}</StyledHeader>;
})  

}
            
            
            <StyledImgContact/>
<StyledMainAbout > <FormData /></StyledMainAbout>    
</StyledMain>
       
            
        )
}

export default ContactMe;