import React from 'react'
import CarouselHome from './Carousel'
import Heading from './Heading';
import Paragraph from './Paragraph';
import Container from 'react-bootstrap/Container'
import AccordionTabs from './Accordion';


function Home() {
    return (
        <div>
            <CarouselHome />
            <Container>
               <Heading className="mt-3" content="We do YAY things"/>
               <Paragraph content="Nam tincidunt, sapien nec congue porta, 
               tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
               Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, 
               aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, 
               efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, 
               sollicitudin in luctus a, varius eget massa."/>
            </Container>
            <AccordionTabs />
        </div>
    )
}

export default Home
