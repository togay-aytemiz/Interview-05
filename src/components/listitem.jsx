import React, { useState, useRef, useEffect } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";

const Listitem = ({ text }) => {
    let newText = "";
    if (text.length >= 6) {
        newText = text.slice(0, 5) + '...';
    } else {
        newText = text;
    }

    const [isViewClicked, setIsViewClicked] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (textRef.current && !textRef.current.contains(event.target)) {
                setIsViewClicked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [textRef]);

    return (
        <div className='py-1' ref={textRef}>
            <div className='flex flex-col gap-2 justify-center'>
                <div className='flex gap-2 items-center'>
                    <p>{newText}</p>
                    {text.length >= 6 && (
                        <button onClick={() => setIsViewClicked(prev => !prev)}>
                            {isViewClicked ? <LuEyeOff /> : <LuEye />}
                        </button>
                    )}
                </div>
                {isViewClicked && (
                    <div className='bg-black text-white p-2 rounded-lg'>
                        <p>Full text: {text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Listitem;
