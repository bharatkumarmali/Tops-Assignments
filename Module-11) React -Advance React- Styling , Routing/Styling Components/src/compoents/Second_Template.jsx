import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Second_Template() {

    
  return (
    <div>
      <Container fluid >
        <Row>
          <Col className="col">
            <DropdownButton
              id="dropdown-item-button"
              title="Browse All Categories"
            >
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        
          
          <Col className="col-10 d-flex gap-5 pt-2">
          <p>Home<ArrowDropDownIcon /></p>
          <p>About</p>
          <p>Shop<ArrowDropDownIcon /></p>
          <p>Vendors<ArrowDropDownIcon /></p>
          <p>Megamenu<ArrowDropDownIcon /></p>
          <p>Blog<ArrowDropDownIcon /></p>
          <p>Pages<ArrowDropDownIcon /></p>
          <p>Contact</p>
          <p className="mx-5">
          <img  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-headphone.svg
            " alt="" height="30px"/>
            &nbsp; 1900-888</p>  
         </Col>
        </Row>
    <hr />
      </Container>
    </div>
  );
}
export default Second_Template;
