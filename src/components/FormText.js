import React, { useState } from 'react'

export default function FormText(props) {
    const [text, setText] = useState("enter text here");

    const handleUpClick = () => {
        // console.log("handle up was clicked")
        // setText("you are aabslutlely right men")
        let NewText = text.toUpperCase();
        setText(NewText)
    }


    const handleCapitalize = () => {
        let NewText = text.toLowerCase();
        setText(NewText)
    }

    const handleExtraSpaces = () => {
        let NewText = text.split(/[ ]+/);
        setText(NewText.join[","])
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const handleONchange = (event) => {
        // console.log("handle on change applied")
        setText(event.target.value)
    }

    // let words = text.split(" ").length()
    return (
        <>
            {/* <div className="mx-5 my-2" style={{ color: props.mode === "dark" ? "black" : "white" }} > */}
            <div className="mx-5 my-2" style={{ color: props.mode === "dark" ? "white" : "black" }} >

                <div class="mb-3">
                    <h2>{props.heading} </h2>
                    <textarea class="form-control" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "green" }} onChange={handleONchange} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button type='button' className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Anylize Now</button>
                <button type='button' className="btn btn-primary mx-1 my-1" onClick={handleCapitalize} > lower Text </button>
                <button type='button' className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
                <button type='button' className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type='button' className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Capitalize Text</button>


            </div>

            <div className="containear my-4 mx-5" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h3 > Here Text Summery</h3>
                <p> Your all words={text.split(" ").length} words  and the all the {text.length} characters , taken time to reads : {text.split(" ").length * 0.08} s  </p>


            </div>

        </>
    )
}



