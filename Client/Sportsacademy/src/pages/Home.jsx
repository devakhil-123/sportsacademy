import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getstudents } from '../ApiServices/Allapi'

function Home() {


  useEffect(()=>{

  },[])

  const getData=async()=>{
  const result=await getstudents()
  console.log(result);




  

   
    }


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
          <tr>
            <th>Association Cricket League</th>
            <th>21-05-2023</th>
            <th>11pm</th>
            <th>Manjeri</th>
          </tr>
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