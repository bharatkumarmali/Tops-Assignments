import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import styled from 'styled-components'
import TelegramIcon from '@mui/icons-material/Telegram';

function Slider_main() {
      const Inputgroup = styled.div`
      padding : 20px; 
      height: 64px;
      width: 343px;
      background-color : white;
      margin-left : 15px;
      margin-top: 100px;
      position: absolute;
      border-radius: 50px;
      `
const Btnn = styled.button`
position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #26A65B;
  color: white;
  border: none;
  border-radius: 50px;

  padding : 20px;
  width : 170px;
  font-size: 18px;
  &:hover {
    background-color: #1E7E4C;
  }


`
  return (

    <Carousel fade style={{borderRadius : "20px", padding : "20px"}}>
       <Carousel.Item>
        <img src='https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-2.png' height={500} text="First slide" style={{borderRadius : "50px 50px 50px 50px"}} />
        <Carousel.Caption style={{color : "#253D4E" , marginBottom : "30vh" ,  }}> 
          <p style={{fontSize:"70px",fontWeight : "600", marginRight: "360px"  , fontFamily : "Quicksand,sans-serif" }}>Fresh Vegetables <span>Big discount</span>  </p>
          <p style={{fontSize : "33px" ,fontWeight : "600",position : "absolute"}} >Save up to 50% off on your first order.</p>
       <Inputgroup >
       <TelegramIcon  style={{  fontSize : "30px"}}/>
       <input type="text" style={{marginRight: "66px",marginLeft: "17px",border : "none",outline : "none"}}  placeholder='Your email address'  />
     <Btnn style={ {marginLeft : "190px" , marginBottom : "3px"}} >
      Subscribe
     </Btnn>  
         </Inputgroup>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-1.png' height={500} text="Second slide"   style={{borderRadius : "50px 50px 50px 50px"}} />
        <Carousel.Caption  style={{color : "#253D4E" , marginBottom : "30vh"}}>
        <h3 style={{fontSize : "70px" ,position : "absolute",left:"-120px",top:"-150px", fontWeight : "600" , fontFamily : "Quicksand,sans-serif" }}>Don't miss amazing<br/> <span>Grocery deal</span>  </h3>
        <p style={{fontSize : "33px" ,fontWeight : "600",position : "absolute",right:"510px",top:"40px"}} >Sign up for the daily newletter.</p>
        <Inputgroup style={{marginTop : "130px"}}>
       <TelegramIcon  style={{fontSize : "30px"}}/>
       <input type="text" style={{marginRight: "66px",marginLeft: "17px" , border : "none" , outline : "none"}}  placeholder='Your email address'  />
      
     <Btnn style={ {marginLeft : "190px" , marginBottom : "3px"}} >
      Subscribe
     </Btnn>
         </Inputgroup>
     </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
   
  )
}

export default Slider_main





