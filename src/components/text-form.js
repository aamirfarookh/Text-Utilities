import React, { useRef, useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
  };
  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();

    setCopySuccess("Copied!");
  };

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
              backgroundColor: props.mode === "dark" ? "grey" : "whitesmoke",
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid black",
            }}
          ></textarea>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpCase}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "blue",
              border: "none",
            }}
          >
            Change to UPPER
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleLoCase}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "blue",
              border: "none",
            }}
          >
            Change to lower
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleClearText}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "blue",
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
              backgroundColor: props.mode === "dark" ? "black" : "blue",
              border: "none",
            }}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "whitesmoke" : "black" }}
      >
        <h2>Your text summary is here</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.trim().split(" ").length} read minutes</p>
        <h2>Text preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview it here."}</p>
      </div>
    </>
  );
}
