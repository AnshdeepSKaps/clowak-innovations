import React from 'react'
import briefcase from '../images/briefcase.jpg'

export default function info1() {

    const infoStyle = {
        height: "50vh",
        width: "50%",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        margin: "auto"
    }

    const pStyle = {
        height: "50vh",
        width: "100%",
        fontSize: "1rem",
        backgroundColor: "rgba(98,190,31)",
        borderRadius: "20px"
    }

    const imgStyle = {
        height: "100%",
        width: "100%",
        backgroundImage: "url(\"https://static.wixstatic.com/media/64fb46_7aa99848aa9640eba0178ee5357c51c5~mv2.jpg/v1/fill/w_626,h_913,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/64fb46_7aa99848aa9640eba0178ee5357c51c5~mv2.jpg\")",
        // backgroundImage: `url(${briefcase})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
    }

    const btnStyle = {
        marginTop: "20px",
        height: "50px",
        width: "100px",
        background: "rgb(244,187,82)",
        borderRadius: "20px",
        color: "white",
        fontWeight: "bolder"
        // border: "4px solid rgb(254,138,3)"
    }

    return (
        <>
            <div className='' style={{ height: "3vh", width: "100%" }}></div>

            <div className='container-fluid d-flex flex-md-row flex-column align-items-center justify-content-center info1-container' style={{ gap: "3rem" }}>

                <div className='d-flex flex-row align-items-center justify-content-center' style={pStyle}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>

                        <h1 style={{ fontWeight: "bolder" }} className='text-white text-centre'>PDC 1.0</h1>
                        <div style={{ color: "white", fontSize: "1.2rem" }} className="ps-2 pe-2 d-flex justify-content-center align-items-center" >Clowak Innovations introduces Portable Dental Clinic (PDC), is portable dentistry equipment ideal for use for domiciliary, military, humanitarian and normally inaccessible environments.</div>

                        <div style={btnStyle} className="d-flex justify-content-center align-items-center btn">More</div>
                    </div>
                    <div style={imgStyle}></div>
                </div>

                <div className='d-flex flex-row align-items-center justify-content-center' style={pStyle}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>

                        <h1 style={{ fontWeight: "bolder" }} className='text-white text-centre'>PDC 1.0</h1>
                        <div style={{ color: "white", fontSize: "1.2rem" }} className="ps-2 pe-2 d-flex justify-content-center align-items-center" >Clowak Innovations introduces Portable Dental Clinic (PDC), is portable dentistry equipment ideal for use for domiciliary, military, humanitarian and normally inaccessible environments.</div>

                        <div style={btnStyle} className="d-flex justify-content-center align-items-center btn">More</div>
                    </div>
                    <div style={imgStyle}></div>
                </div>
            </div>
        </>
    )
}
