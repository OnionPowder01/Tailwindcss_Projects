import axios from "axios";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";



function LinkResults({ inputValue }) {
/* eslint-disable no-unused-vars */
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false); 
/* eslint-enable no-unused-vars */


  const fetchData = async () => {
    try {
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(res.data.result.full_short_link);
    } catch(err) {
        setError(err)
    } 
  }


  useEffect(() => {
    if(inputValue.length) {
        fetchData()
    }
    // eslint-disable-next-line
  }, [inputValue]) 

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);




  return (
    <>
    {shortenLink && (
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
        <p className="font-bold text-center text-veryDarkViolet md:text-left">
          {inputValue}
        </p>
  
        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div className="font-bold text-cyan flex-wrap">{shortenLink}</div>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button
              className={
                copied ? "copy-button bg-darkViolet " : "copy-button bg-cyan"
              }
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    )}
    
    </>
  );
}

export default LinkResults;
