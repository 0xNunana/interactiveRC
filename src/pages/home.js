import React from 'react'
import {StarIcon} from '@heroicons/react/24/outline'
import {Link} from "react-router-dom"
// import { useState } from 'react'

const Home = () => {
    // const [clicked,setClicked]=useState();
    // const handleClick=()=>{
    //     setClicked(e.target.value)
    // };
  return (
    <div className="bg-gray-900 items-center flex justify-center py-10" >
      <div className="bg-gray-800 rounded-3xl my-10 h-50 p-7 text-white">
        <div className='rounded-full relative bg-gray-700 w-[50px] h-[50px]'>
          <StarIcon className='h-7 fill-orange-500 absolute pl-3 pt-1 my-2 text-center'/>
        </div>
        <div className='text-3xl font-semibold pt-5'>How did we do?</div>
        <div className='py-4 text-gray-400 text-sm '>
          Please let us know how we did with your support <br/>request.All feedback is appreciated to help us<br/> improve our offering!
        </div>
        <div className='space-x-7 py-4 text-gray-400 '>
          <input type="button"  className='hover:bg-slate-300 rounded-full w-[50px] h-[50px] bg-gray-700' value="1"/>
          <input type="button" className='hover:bg-slate-300 rounded-full w-[50px] h-[50px] bg-gray-700' value="2"/>
          <input type="button" className='hover:bg-slate-300 rounded-full w-[50px] h-[50px] bg-gray-700' value="3"/>
          <input type="button" className='hover:bg-slate-300 rounded-full w-[50px] h-[50px] bg-gray-700' value="4"/>
          <input type="button" className='hover:bg-slate-300 rounded-full w-[50px] h-[50px] bg-gray-700' value="5"/>
        </div>
        <div className='w-full my-3 '>
            <Link to="/success">
            <button className='bg-orange-500 w-full rounded-3xl h-15 py-2 font-semibold' >SUBMIT</button>
            </Link>
            
      </div>
    </div>
    </div>
  )
}

export default Home


