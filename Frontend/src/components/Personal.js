import React from 'react'
import TopNav from './TopNav'
import "../styles/personal.css";

function Personal() {
  return (
    <div>
        <TopNav/>
        <div>
        <h1 className='font-bold text-3xl sm:text-2xl lg:text-4xl py-4 text-cyan-700 heading'>Personal Details</h1>
        
        </div>
    </div>
  )
}

export default Personal