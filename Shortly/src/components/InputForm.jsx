import React, { useState } from "react";
import validator from 'validator'

function InputForm({ setInputValue, inputValue }) {
    const [value, setValue] = useState('')

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
    
  // Validate a URL
const validate = (value) => {
  return validator.isURL(value)

}

const [errMsg, setErrMsg] = useState('')
const [customClass, setCustomClass] = useState('')

function formSubmit(e) {
  e.preventDefault()

  if (value === '') {
      setErrMsg('Please enter something')
      setCustomClass('border-red')
  } else if (validate(value) === false) {
      setErrMsg('Please enter a valid URL')
      setCustomClass('border-red')
  } else {
      setErrMsg('')
      setCustomClass('')
    alert('Success, your link is under the input field')
  }
}

    console.log(validate(value))
    console.log(errMsg)
    return (
        <form
          action=""
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onClick={formSubmit}
          
        >
          <input
            type="text"
            className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${customClass}`}
            placeholder="Shorten a link here"
            id="link-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleClick} className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It
          </button>
          {/* Error Message */}
          <div id="err-message" className="absolute left-7 bottom-3 text-red italic">{errMsg}</div>
        </form>
    )
}


export default InputForm