import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const handleCopy = () => {
        let text = document.getElementById("text-box")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} id="text-box" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercacse</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




            </div >
            <div className="conatiner my-3 " style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2> Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}  words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
            </div>
        </>
    )
}
