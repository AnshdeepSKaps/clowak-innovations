import React from 'react'
import Navbar from '../components/navbar'
import Info1 from '../components/info1'
import bg from '../images/bg.jpg'

export default function home() {

    const headerStyle = {
        background: `url(${bg}) rgba(0,0,0,0.3)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        height: "92vh",
    }

    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center' style={headerStyle}>
                <h1 style={{
                    color: "#FFFFFF",
                    fontSize: "4rem",
                    // background: "rgba(0,0,0,0.7)"
                }} className='text-center' >CLOWAK IS THE UPCOMING INNOVATION IN DENTISTRY</h1>
            </div>

            <Info1 />

        </div>


    )
}
