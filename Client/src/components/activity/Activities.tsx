import React from 'react'
import { Button } from '../ui/button'

const Activities = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
      <div className='main-activities w-4/5'>
      <h1 className='text-3xl font-sans m-4 font-bold w-4/5'>Activities</h1>
        <div className='flex justify-end'>
          <Button>Create New</Button>
        </div>
        <div className="activities">
          <div className="activity rounded-lg m-2 shadow-xl p-8 ">
            <p className="text-xl font-sans font-semibold">project-green</p>
            <p className="text-m font-mono font-light ">Project-Green would assess the environmental impact based on various factors such as transportation methods, duration, and frequency. Users would input details about the activity, and the app would calculate its carbon footprint.</p>
            <Button>Join</Button>
          </div>
          
        </div>
      </div>
        
    </div>
  )
}

export default Activities