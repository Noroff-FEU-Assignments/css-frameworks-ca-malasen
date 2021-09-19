import React from 'react'
import Paragraph from './Paragraph'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactInfo() {
    return (
        <>
        <Row>
            <Col className="mb-2" xs={2}>
            <i class="fas fa-envelope"></i>
            </Col>
            <Col className="mb-2">
            <Paragraph content="hello@yay.com" />
            </Col>
        </Row>
        <Row>
            <Col className="mb-2" xs={2}>
            <i class="fas fa-phone"></i>
            </Col>
            <Col className="mb-2">
            <Paragraph content="123 456 7890" />
            </Col>
        </Row>
        <Row>
            <Col xs={2}>
            <i class="fas fa-map-marker-alt"></i>
            </Col>
            <Col className="contact-info-address">
            <Paragraph content="123 Some Street" />
                <Paragraph content="Somewhere" />
                <Paragraph content="Some City" />
                <Paragraph content="1000" />
            </Col>
        </Row>
        </>
    )
}

export default ContactInfo
