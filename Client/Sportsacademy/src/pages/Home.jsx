import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getevents, getstudents } from '../ApiServices/Allapi'

function Home() {

  const [eventsData,setEventsData]=useState([]) 
    useEffect(()=>{
        getData()
    },[])


    const getData=async()=>{
      const result=await getevents()
      const events = result.data
      console.log(events);
      setEventsData(events)
    }
  console.log(eventsData);


    return (





    <>
    <div className='p-5'>
      <h2 className='text-center text-warning'>Upcoming Events'</h2>
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
            eventsData.length > 0 ?
            eventsData.map(item=>(
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
    </div>

   <div className='text-center mb-5'>
   <Link className='btn btn-dark shadow' to={'/events'}>
Events.......
</Link>
   </div>



    </>


  )
}

export default Home