import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="footer-some" md={6}><p><i class="fab fa-vimeo-v"></i><i class="fab fa-youtube"></i></p></Col>
                    <Col className="footer-flex" md={6}><p>hello@yay.com</p><p>Copyright 2020</p></Col>
                </Row>
                </Container>
        </footer>
    )
}

export default Footer
