import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


function ContactForm() {
    return (
            <Form>
  <Form.Group className="mt-3 mb-1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group className="mb-1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" />
  </Form.Group>
  <Form.Group className="mb-1">
    <Form.Label>Website</Form.Label>
    <InputGroup>
       <InputGroup.Text className="d-none d-md-block">https://</InputGroup.Text>
       <Form.Control type="text" />
    </InputGroup>
  </Form.Group>
  <Form.Group className="mb-2">
    <Form.Label>Message</Form.Label>
     <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
  </Form.Group>
  <Button className="mb-4" variant="secondary" type="submit">
    Submit
  </Button>
</Form>
      
    )
}

export default ContactForm
