import React, { useState } from 'react'

export default function About() {
    // let myStyle = {
    //     color: "white",
    //     backgroundColor: "black",
    //     border: "1px solid white"
    // }

    const [myStyle, setmyStyle] = useState({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
    })

    const [BtnText, setBtnText] = useState("enable Dark mode")
    const toggleMode = () => {
        if (myStyle.color === "black") {
            setmyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("enable the Light Mode ")
        }
        else {
            setmyStyle({

                color: "black",
                backgroundColor: "white"

            })
            setBtnText("enable The Dark Mode ")
        }
    }

    return (

        <>
            <div className="container-fluid">
                <div className="container mx-3 my-3 " style={myStyle}>
                    <h2 className='text-center'> About Us</h2>
                    <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample" >
                        <div className="accordion-item " style={myStyle}>
                            <h2 className="accordion-header" id="flush-headingOne" >
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={myStyle} id="flush-headingTwo">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={myStyle} id="flush-headingThree">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <did className="container mx-4 my-3" >
                    <button onClick={toggleMode} className='btn btn-primary' type='button'>{BtnText} </button>
                </did>




            </div>

        </>
    )
}
