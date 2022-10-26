import React, {useRef, useState} from 'react'

export default function Textform (props) {
const [text, setText] = useState("");
const [copySuccess, setCopySuccess] = useState('');
const textAreaRef = useRef(null);

const handleUpCase =()=> {
    setText(text.toUpperCase())
}

const handleOnChange=(event)=>{
    setText(event.target.value)
}

const handleLoCase =()=> {
    setText(text.toLowerCase())
}
const handleClearText = ()=>{
   
    setText("");
    
}

const handleCopyText = (e)=>{
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    
    setCopySuccess('Copied!');
   
}

  return (
    <>
   <div className='container my-4'>
    <h1>{props.heading}</h1>
     <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" ref={textAreaRef}></textarea>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleUpCase}>Change to UPPER</button>
  <button type="button" className="btn btn-primary mx-3" onClick={handleLoCase}>Change to lower</button>
  <button type="button" className="btn btn-primary mx-3" onClick={handleClearText}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-3"  onClick={handleCopyText}>Copy Text</button>
   </div>
    <div className='container'>
      <h2>Your text summary is here</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.trim().split(" ").length } read minutes</p>
      <h2>Text preview</h2>
      <p>{text}</p>
    </div>
  </>

  );
}
