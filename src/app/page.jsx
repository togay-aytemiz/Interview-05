'use client'
import Progressbar from '@/components/Progressbar'
import App from '../App'
import { useState } from 'react'

const Home = () => {

  const [progress, setProgress] = useState(45)



  return (
    <div>
      <input type="text" name="" id="" placeholder='Percentage' value= {progress} className='ml-4 mt-4 p-3 rounded-lg shadow-xl' onChange={(e) => setProgress(e.target.value)}/>
      <Progressbar progress={progress}/>
    </div>
  )
}
export default Home
