import React from 'react'
import Container from 'react-bootstrap/Container'
import PagesBar from './PagesBar'
import CardNews from './CardNews'
import Heading from './Heading'


function News() {
    return (
        <div>
            <Container>
            <Heading content="News"/>
            </Container>
            <PagesBar />
            <CardNews />
            <PagesBar />
        </div>
    )
}

export default News