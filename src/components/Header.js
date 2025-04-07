import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { Link, BrowserRouter as Router } from "react-router-dom";

import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import logo from '../assets/falcon-logo.png'
import linkedin from '../assets/linkedin.svg'
import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [ActiveLink, setActiveLink] = useState("home")

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    return (
        <Router>
        <Navbar data-bs-theme="light" expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand className='navbar-logo'>
                  <Link to="/" >
                    <img src={logo} alt='Logo' />
                  </Link> 
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id='basic-navbar-nav' className='please-center'>
                    <Nav className='ms-auto'>

                        <Nav.Item>
                          <a href='#home' className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} > Home </a>
                        </Nav.Item>

                        <Nav.Item>
                          <a href='#skills' className={ActiveLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} > Skills </a>
                        </Nav.Item>

                        <Nav.Item>
                          <a href='#projects' className={ActiveLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} > Projects </a>
                        </Nav.Item>

                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank"  href="https://github.com/starboyagus"><img src={github} alt="" /></a>
                            <a target="_blank"  href="https://www.instagram.com/starboyagus/"><img src={instagram} alt="" /></a>
                            <a target="_blank"  href="#"><img src={linkedin} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    )
}