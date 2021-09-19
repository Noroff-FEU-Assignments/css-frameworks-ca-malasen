import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function PagesBar() {
    return (
        <Container >
            <ButtonGroup className="mb-4" aria-label="Basic example">
                <Button variant="primary">1</Button>
                <Button variant="white">2</Button>
                <Button variant="white">3</Button>
                <Button variant="white">4</Button>
            </ButtonGroup>
        </Container>
    )
}

export default PagesBar
