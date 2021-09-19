import React from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
import AccordionContext from 'react-bootstrap/AccordionContext';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';


function AccordionTabs() {
    return (
       <div> 
        <Container>
            <Accordion className="d-md-none">
                <Card>
                    <AccordionToggle as={Card.Header} eventKey="0">First</AccordionToggle>
                    <AccordionCollapse eventKey="0">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo 
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus 
                            non maximus. Sed condimentum mattis rhoncus. </p>
                        </Card.Body>
                    </AccordionCollapse>
                </Card>
                <Card>
                    <AccordionToggle as={Card.Header} eventKey="1">Second</AccordionToggle>
                    <AccordionCollapse eventKey="1">
                        <Card.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mauris pellentesque, dapibus arcu 
                                quis, euismod nunc. Fusce pretium dignissim neque sit amet condimentum.
                                Vivamus fringilla, dui sed luctus maximus, velit diam porta arcu, ut euismod neque orci non sapien.</p>
                        </Card.Body>
                    </AccordionCollapse>
                </Card>
                <Card>
                    <AccordionToggle as={Card.Header} eventKey="2">Third</AccordionToggle>
                    <AccordionCollapse eventKey="2">
                        <Card.Body>
                            <p>Donec porttitor orci nec urna tincidunt sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                per inceptos himenaeos. Mauris at tristique eros. Vestibulum id pulvinar ante. Quisque nec lacus eu purus finibus
                                sollicitudin. Donec nec ipsum non leo ultrices fermentum. Aenean gravida sagittis nibh, sed consectetur nisi faucibus in.</p>
                        </Card.Body>
                    </AccordionCollapse>
                </Card>
            </Accordion>
            <div className="d-none d-md-block">
                <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="first" title="First">
                      <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo 
                       laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus 
                       non maximus. Sed condimentum mattis rhoncus. </p>
                    </Tab>
                    <Tab eventKey="second" title="Second">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mauris pellentesque, dapibus arcu 
                      quis, euismod nunc. Fusce pretium dignissim neque sit amet condimentum.
                      Vivamus fringilla, dui sed luctus maximus, velit diam porta arcu, ut euismod neque orci non sapien.</p>
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        <p>Donec porttitor orci nec urna tincidunt sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                      per inceptos himenaeos. Mauris at tristique eros. Vestibulum id pulvinar ante. Quisque nec lacus eu purus finibus
                      sollicitudin. Donec nec ipsum non leo ultrices fermentum. Aenean gravida sagittis nibh, sed consectetur nisi faucibus in.</p>
                    </Tab>
                </Tabs>
            </div>
        </Container>
        </div>
    )
}

export default AccordionTabs
