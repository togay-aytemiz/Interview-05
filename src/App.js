import React, { useEffect, useState, useRef } from "react";
import Listitem from "./components/listitem";

function App() {
  // KODUNU BURAYA GELECEK

  const [textList, setTextList] = useState([]);
  const [text, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    setTextList([...textList, text])
    setText("")
  }

  return (
    <div className="my-9">
      {/* form */}
      <div className="mx-auto w-[400px]">
        <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
          <input
            placeholder="Metin girin"
            className=" bg-white p-3 rounded-lg shadow-md w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className="p-3 px-6 bg-blue-800 text-white rounded-lg shadow-md">
            Ekle
          </button>
        </form>
      </div>


      {/* list */}
      <div className="mx-auto w-[400px] mt-4 p-2">
        {textList.map((text, index)=> (
        <Listitem key={index} text={text}/>
        ))}

      </div>
    </div>
  );
}

export default App;
