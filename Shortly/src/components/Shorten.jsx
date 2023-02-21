import React , { useState } from "react";
import InputForm from "./InputForm";
import LinkResults from './LinkResults'

function Shorten() {
const [inputValue, setInputValue] = useState('');
  return (
    <section id="shorten" className="relative bg-gray-100">
      {/* Shorten Container */}
      <div className="mx-w-4xl mx-auto p-6 space-y-6">
        <InputForm setInputValue={setInputValue} />
        <LinkResults inputValue={inputValue} />
        
      </div>
    </section>
  );
}

export default Shorten;
