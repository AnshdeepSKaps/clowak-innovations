import React from 'react'
import briefcase from '../images/briefcase.jpg'

export default function info1() {

    const infoStyle = {
        // border: "2px solid red",
        height: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
    }

    const imgStyle = {
        height: '100%',
        width: "100%",
        backgroundImage: `url(${briefcase})`,
        backgroundRepeat: "no-repeat"
    }


    const pStyle = {
        height: "100%",
        width: "100%",
        fontSize: "1.85rem",
        fontWeight: "bolder",
        backgroundColor: "#00ff80"

    }

    return (
        <>
            <div className='' style={{ height: "3vh", width: "100%" }}>

            </div>
            <div className='align-items-center justify-content-center' style={infoStyle}>

                <div className="ps-5 pe-5 d-flex justify-content-center align-items-center" style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam aspernatur placeat soluta aliquid neque reprehenderit odio deleniti ipsa sit perspiciatis, labore asperiores, consequuntur vitae dignissimos voluptas voluptatibus veritatis quod, repellat unde! Facere ab labore eligendi, quasi expedita perspiciatis rerum minus animi dolorem dolores, a quaerat, debitis exercitationem alias dicta?</div>

                <div style={imgStyle}>

                </div>
                {/* <img style={{ justifySelf: "center" }} src={briefcase} height="800px" alt="" /> */}

            </div>
        </>
    )
}
