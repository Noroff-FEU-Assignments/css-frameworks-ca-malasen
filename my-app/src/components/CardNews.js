import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function CardNews() {
    return (
        <Container className="mb-4">
            <Row>
                <Col lg={3} >
                    <Card className="mb-4">
                        <Card.Img variant="top" src="images/news/news-1.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Img variant="top" src="images/news/news-2.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text> Nunc malesuada eget est fringilla dapibus. </Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>  
                </Col>
                <Col lg={3}>
                    <Card>
                    <Card.Img variant="top" src="images/news/news-3.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>  
                </Col>
                <Col lg={3}>
                    <Card>
                    <Card.Img variant="top" src="images/news/news-4.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text> Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>    
                </Col>
            </Row>
            <Row>
                <Col lg={3} >
                    <Card className="mb-4">
                        <Card.Img variant="top" src="images/news/news-5.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Img variant="top" src="images/news/news-6.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text> Nunc malesuada eget est fringilla dapibus. </Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>  
                </Col>
                <Col lg={3}>
                    <Card>
                    <Card.Img variant="top" src="images/news/news-7.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>  
                </Col>
                <Col lg={3}>
                    <Card>
                    <Card.Img variant="top" src="images/news/news-8.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text> Nunc malesuada eget est fringilla dapibus.</Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>    
                </Col>
            </Row>
        </Container>
    )
}

export default CardNews
