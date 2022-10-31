import React, { useRef, useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const handleUpCase = () => {
    if(text.length!==0){
    setText(text.toUpperCase());
    props.alert("Changed to UpperCase!","success");
  }else {
    props.alert("Enter text to change to UpperCase","warning");
  }
};

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoCase = () => {
    if(text.length!==0){
    setText(text.toLowerCase());
    props.alert("Changed to LowerCase!","success");
  }else{
    props.alert("Enter text to change to LowerCase","warning")
  }
};
  const handleClearText = () => {
    if(text.length!==0){
    setText("");
    props.alert("Text cleared!","success");
  }else{
    props.alert("Nothing to clear!","warning")
  }
};

  const handleCopyText = (e) => {
    if(text.length!==0){
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();

    setCopySuccess("Copied!");
    props.alert("Copied to clipboard!","success");
  }else{
    props.alert("Nothing to copy!","warning")
  }
};

  const handleSpaces =()=>{
    if(text.match(/\s{2,}/g)){
    setText(text.replace(/\s{2,}/g, ' ').trim());
    props.alert("Extra Spaces removed!","success")
  }else{
    props.alert("No extra spaces!","warning")
  }}

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "whitesmoke" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
            ref={textAreaRef}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "whitesmoke",
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid black",
            }}
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-block" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleUpCase}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "blue",
              border: "none",
              
            }}
          >
            Change to UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleLoCase}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "blue",
              border: "none",
              
            }}
          >
            Change to LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleClearText}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "blue",
              border: "none",
              
            }}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleCopyText}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "blue",
              border: "none",
              
            }}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleSpaces}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(11 62 104)" : "blue",
              border: "none",
              
            }}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "whitesmoke" : "black" }}
      >
        <h2>Your text summary is here</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} read minutes</p>
        <h2>Text preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview it here."}</p>
      </div>
    </>
  );
}
