import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function AddStudents() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <>
    <button className='btn btn-info' onClick={handleShow}>+Add Student</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Students</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel  controlId="floatingName" label="Student Name" className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="Age" label="Age" className='mb-3'>
        <Form.Control type="" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Gender" label="Gender" className='mb-3'>
      <Form.Select aria-label="Floating label select example">
        <option value="1">Male</option>
        <option value="2">Female</option>
      </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="sport" label="sport" className='mb-3'>
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="photo" label="photo" className='mb-3'>
        <Form.Control type="file" placeholder="" />
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

export default AddStudents