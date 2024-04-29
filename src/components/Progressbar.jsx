import React from 'react'



const Progressbar = ({progress}) => {
  
  return (
    <div className='m-4'>
        <div className="h-[20px] rounded-md bg-[#D3D3D3]">
            <div className={`h-[20px] rounded-md bg-[#018002]`} style={{width: `${progress}%`, transition: 'width 0.5s ease-in-out'}}></div>
        </div>
    </div>
  )
}

export default Progressbar