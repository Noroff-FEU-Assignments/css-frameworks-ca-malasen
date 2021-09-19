import './sass/styles.scss';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import {LinkContainer} from 'react-router-bootstrap'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


import Home from './components/Home';
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="wrapper">
      <Router>
      <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/" ><Navbar.Brand >The YAY company</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
                    <Nav className="mr-auto my-2 my-lg-0">
                        <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/news"><Nav.Link>News</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-sm-2 my-sm-0"
                            aria-label="Search"
                        /> 
                      <Button variant="primary">Go</Button>  
                    </Form> 
                </Navbar.Collapse>  
          </Container>
        </Navbar>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    <Footer /> 
  </>
  );
}

export default App;
