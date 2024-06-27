import React from "react";
import A from "../Style/Index_Nest.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';

function Index_Nest() {
  return (
    <div> 
      <div className={A.navbar}>
        <div className={A.subnavbar}>
          <span>About us</span>
          <span>My Account</span>
          <span>Wishlist</span>
          <span>Order-Tracking</span>
        </div>
        <div className={A.rightnavbar}>
          <a href="">Need help? Call Us : + 1800 900</a>
          <a href="">English</a>
          <a href="">USD</a>
        </div>
      </div>
      <div className="header">
      <div className="subheader">
      </div>
      <Row className="container-fluid" >
        <Col >
        <img src='	https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg' alt="" height={69} style={{marginTop : "39px"}} />
    
        </Col>
        <Col xs={5} className="me-5 mt-2">

        <Col>
        <FloatingLabel controlId="floatingInputGrid" label="Search-engine" style={{marginTop : "30px" , marginLeft : "-6vw" , width : "45vw"}}>
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
        
        <SearchIcon style={{marginLeft : " 36vw" ,   position: "absolute" , top : "80px" , fontSize :"35px" }} />
      </Col>
  
           </Col>
        <Col style={{display : "flex" , }}>
        <div style={{marginLeft : "0vw" ,  marginTop : " 56px"}}>
        <Badge badgeContent={3} color="success">
        <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-compare.svg" alt="" />
       </Badge>
            <span>Compare</span>
        </div>
        <div style={{marginLeft : "4vh" ,  marginTop : "56px"}}>
        <Badge badgeContent={6} color="success">
        <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-heart.svg" alt="" />
       </Badge>
            <span>Whilist</span>
        </div>
        <div style={{marginLeft : "4vh" ,  marginTop : "56px"}}>
        <Badge badgeContent={2} color="success">
       
        <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-cart.svg" alt="" />
       </Badge>
            <span> Cart</span>
        </div>
        <div style={{marginLeft : "3vh" ,  marginTop : "56px"}}>
        <img className="mx-3" src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-user.svg" alt="" />
            <span>Account</span>
        </div>
        </Col>
      </Row>
      <hr style={{marginTop : "10px", color : "#7e7e7e"}} />
      </div>
    </div>
  );
}

export default Index_Nest;
