import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Addevents() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

<button className='btn btn-info' onClick={handleShow}>+Add Events</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel  controlId="floatingName" label="Event Name" className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="Age" label="Date" className='mb-3'>
        <Form.Control type="date" placeholder="" />
      </FloatingLabel>
     
      <FloatingLabel controlId="sport" label="time" className='mb-3'>
        <Form.Control type="time" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="photo" label="location" className='mb-3'>
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default Addevents