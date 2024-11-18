import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
const TopNavigation = () => {
  const [scrollPosition,setScrollPosition]=useState(
    {
      navBarTitle: 'navTitle',
      navBarBackground: 'navScrollBackground',
      navBarItem: 'navBarItemScroll'
    }
  );
  const onScroll =()=>{
    if(window.scrollY>100){
      setScrollPosition({navBarTitle:'navTitleScroll',navBarBackground:'navScrollBackground', navBarItem: 'navBarItemScroll'})
    }else if(window.scrollY<100){
      setScrollPosition({navBarTitle:'navTitle',navBarBackground:'navBackground', navBarItem:'navItem' })
    }
  }
  useEffect(()=>{
    addEventListener('scroll',onScroll);
  },[]);
  return (
    <>
      <Navbar expand="lg" className={scrollPosition.navBarBackground} fixed='top'>
      <Container>
        <Navbar.Brand className={scrollPosition.navBarTitle} href="#home">Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={scrollPosition.navBarItem} href="#home">Home</Nav.Link> 
            <Nav.Link className={scrollPosition.navBarTitle} href="#link">About</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Services</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Pages</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Blogs</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Contact</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopNavigation
