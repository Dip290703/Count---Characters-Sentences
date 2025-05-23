import React, { useState } from "react";

const App = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [text ,setText] = useState("")
  const handleText = (e) => {
    const inputText = e.target.value
    setText(inputText)
   
  
    const characters = inputText.replace(/\s+/g, "")
    setCharacterCount(characters.length);

    const sentences = inputText.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "");
   setSentenceCount(sentences.length);
    
    
    
  }
  return (
    <div className="h-screen bg-amber-400 flex flex-col justify-center items-center">
      <div className="bg-white flex flex-row w-[550px] py-6 px-4 rounded-md gap-8 ">
        <div className="p-6 ">
          <textarea
            placeholder="Type or paste your text here ..."
            value={text}
            onChange={handleText}
            rows="10"
            className=" p-8 border-4 rounded-lg text-lg text-gray-600"
          ></textarea>
        </div>
        <div className="flex flex-col  mt-6   items-center ">
          <h1 className="text-center font-bold text-4xl uppercase border-b">Counter</h1>
          <div className="flex flex-col gap-8 my-8">
            <div>
              <h1 className="font-medium text-2xl uppercase">character</h1>
              <p className="text-center my-4 p-2 border rounded-lg text-xl font-semibold">{characterCount}</p>
            </div>
            <div>
              <h1 className="font-medium text-2xl uppercase">sentence</h1>
              <p className="text-center my-4 p-2 border rounded-lg text-xl font-semibold">{sentenceCount}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-6 px-6 py-4  bg-white rounded-full
      ">Refresh</button>
    </div>
  );
};

export default App;
