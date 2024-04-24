import React, { useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu";


const Listitem = ({text}) => {

    let newText = ""
    if (text.length >= 6) {
        newText = text.slice(0, 5) + '...'
    } else {
        newText = text
    }

    const [isViewClicked, setIsViewClicked] = useState(false)


  return (
    <div className='py-1'>
        <div className='flex flex-col gap-2 justify-center'>
            <div className='flex gap-2 items-center'>
                <p>{newText}</p>
                {text.length >= 6 && <button onClick={()=>setIsViewClicked(pre => !pre)}>{isViewClicked ? <LuEyeOff /> : <LuEye />}</button>}
            </div>
            {isViewClicked && <div className='bg-black text-white p-2 rounded-lg'>
                <p>Full text: {text}</p>
            </div>}
        </div>
    </div>
  )
}

export default Listitem