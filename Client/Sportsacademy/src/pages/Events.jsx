import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addevents from '../components/Addevents'
import { useEffect,useState } from 'react'
import { getevents } from '../ApiServices/Allapi'


function Events() {

 

 

  const [events,setEvents] = useState([])
  useEffect(()=>{
    getData()
  },[])

    const getData = async ()=>{
    const result = await getevents()
    const events = result.data
    console.log(events);
    const res = events
    console.log(res);
    setEvents(res)

  }

  this.state = {Events: [], golfer_events: [] }



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
          




         {
          events.length>0 ?
          events.map(item=>(
            <tr>
            <th>{item.Name}</th>
            <th>{item.date}</th>
            <th>{item.start_time}</th>
            <th>{item.location}</th>
          </tr>
          ))
          :
          <h3>No events</h3>
         }
        </tbody>
      </table>
            </Col>
            

        </Row>
    </div>
    </>
  )
}

export default Events