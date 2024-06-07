import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addevents from '../components/Addevents'

function Events() {
  return (
    <>
    <div className='container-fluid p-5'>
        <h3>Events</h3>
        <Row>
            <Col sm={6} md={2}>
            <Addevents/>
            </Col>
            <Col sm={6} md={10}>
            <table className='table table-dark table-bordered shadow mt-5'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>Location</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <th>Association Cricket League</th>
            <th>21-05-2023</th>
            <th>11pm</th>
            <th>Manjeri</th>
          </tr>
        </tbody>
      </table>
            </Col>
            

        </Row>
    </div>
    </>
  )
}

export default Events