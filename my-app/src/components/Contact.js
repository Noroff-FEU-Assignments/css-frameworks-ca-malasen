import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactInfo from './ContactInfo'
import ContactForm from './Form'
import Heading from './Heading'



function Contact() {
    return (
    <> <Container>
        <Heading content="Submit your Details"/>
        </Container>
        <Container> 
            <Row>
                <Col className="contact-info" md={6,  {order: 'last'}}><ContactInfo /></Col>
                <Col className="contact-form" md={6}><ContactForm /></Col>
                
            </Row>
        </Container>
    </>
    )
}

export default Contact