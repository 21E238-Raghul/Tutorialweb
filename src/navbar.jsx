import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import {useNavigate } from 'react-router-dom';
import { useState, useRef ,useEffect } from 'react';
import axios from 'axios';
import Overlay from 'react-bootstrap/Overlay';
import pic1 from './images/logo-pro.jpg'

function NavBar() {
  const nav=useNavigate();
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const[users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
        },[])

  return (

    <Navbar  className="nav-full " >
      <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <Image className='logo' src={pic1} roundedCircle/>
        </Col>
      </Row>
        <Navbar.Brand href="#" className='sec-main'>Tutorial Spot</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  onClick={()=>nav('/')} className='sec-main'>Home</Nav.Link>
            <Nav.Link onClick={()=>nav('/contact')}  smooth='true' duration={100}  className='sec-main'>Contact Us</Nav.Link>
            <Nav.Link  className='sec-main'>Help</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
          <div class="input-container">
  <input type="text" name="text" class="input" placeholder="search..."/>
  <span class="icon"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
</div>
            
            <Button className='search-button' ref={target} onClick={() => setShow(!show)}>
            <i class="fas fa-user-circle"></i>
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position:'absolute',
              backgroundColor: 'transparent',
              padding: '2px 10px',
              color: 'red',
              borderRadius: 3,
              ...props.style,
            }}
          >
           <div class="container d-flex justify-content-center mt-5">

<div class="prof-card">
  
  <div class="top-container">
    
    <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="70"/>
    
    <div class="ml-3 prof-name">
      {users.map((user)=>{
        return<><h5 className='name'>{user.name}</h5>
        <p class="mail">{user.designation}</p>
        </>
      })

      }
    </div>
    <i class="far fa-edit edit-logo"></i>
  </div>

  <div class="recent-border mt-3 p-2">
    {users.map((user)=>{
  return<span class="wishlist"><i class="fas fa-phone logo-prof"></i>{user.email}</span>
})}
  </div>
  <div class="wishlist-border mt-3 p-2">
    {users.map((user)=>{
    return<span class="wishlist"><i class="far fa-envelope logo-prof"></i>{user.password}</span>
  })}
  </div>
  <div class="fashion-studio-border mt-3 p-2">
    <span class="fashion-studio">Logout<i class="fas fa-sign-out-alt logout-logo" ></i></span>
  </div>
  
</div>

</div>
          </div>
        )}
      </Overlay>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
