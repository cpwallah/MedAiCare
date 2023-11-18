import React from 'react';
import TopNav from './TopNav';
import gif from '../images/map.gif';
import "../styles/hospital.css";

function Hospital() {
  return (
    <div>
    <TopNav/>
    <div>
    <h1 className='font-bold text-xl sm:text-2xl lg:text-4xl py-4 text-cyan-700 heading'>Find Nearest Hospital</h1>
    <img src={gif} alt="Map" className="imgSize"/>  
    <div className='px-4 '>
  <h2 className='text-xl font-bold text-gray-700 px-2 my-5'> Search Filter</h2>
  <div>
    <input className='bg-transparent w-[180px] my-2 py-1  focus:outline-none input-field rounded-full' type='text' placeholder='Address'/>
  </div>
  <div>
    <input className='bg-transparent w-[180px] my-2 py-1  focus:outline-none input-field rounded-full' type='text' placeholder='Type'/>
  </div>
  <div>
    <input className='bg-transparent w-[180px] my-2 py-1  focus:outline-none input-field rounded-full' type='text' placeholder='Status'/>
  </div>
  <button 
  className='bg-custom w-[170px] rounded-full font-medium py-1 my-3 text-white hover:shadow-xl hover:bg-blue-600 outline-none focus:outline-none'>
  Get Started
    </button>
</div>
      </div>
    </div>
  )
}

export default Hospital