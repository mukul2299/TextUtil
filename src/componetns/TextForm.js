import React, { useState } from 'react'

export default function TextForm(prop) {
    const [enteredText, setText] = useState("");
    const [noOfWords, setNoOfWords] = useState(0);
    function onUpperClick() {
        setText(enteredText.toUpperCase());
        prop.showAlert("converted to upper case.","success");
    }
    function handleLowercase() {
        setText(enteredText.toLowerCase());
        prop.showAlert("converted to lower case.","success");
    }
    function handleClear() {
        setText('');
        prop.showAlert("text cleared.","success");
    }
    function onTextChange(event) {
        setText(event.target.value);
        setNoOfWords(enteredText.trim()===""? 0:enteredText.trim().split(" ").length)
    }
    return (
        <>
            <div className="container my-3 " >
                <h2 className="my-3">{prop.formHeading}</h2>
                <div className='mb-3' >
                    <textarea className="form-control" style={{ color: prop.theme === 'light' ? 'black' : 'white', backgroundColor: prop.theme === 'light' ? 'white' : 'black' }} onChange={onTextChange} value={enteredText} id="textArea" rows="6" />
                </div>
                <button className="btn btn-primary" onClick={onUpperClick}>Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowercase}>Lowercase</button>
                <button className="btn btn-danger" onClick={handleClear}>Clear</button>

            </div >
            <div className="container my-3" >
                <h2 >Text Summary</h2>
                <p>{noOfWords} words and {enteredText.trim().length} characters.</p>
                <p>{noOfWords * 0.008} mins read.</p>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p >{enteredText.length < 1 ? 'Pease enter the text to preview.' : enteredText}</p>
            </div>
        </>
    )
}
