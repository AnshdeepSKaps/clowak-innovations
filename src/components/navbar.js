import React from 'react'
import '../styles.css'
import logo from '../images/logo.png'

export default function navbar() {

    const anchorStyle = {
        // textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bolder",
        color: "white",
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr",
        gap: "1.5rem"
    }

    return (
        <nav className="navbar" style={{ background: "rgba(0,0,0,0.5)", width: "100%", position: "fixed" }}>
            <div className="container-fluid justify-content-center">
                <div className="justify-content-center align-items-center" style={gridStyle}>
                    <img src={logo} height="50px" alt="" />
                    <a className="navbar-brand text-white" href="/" style={{ justifySelf: "left", fontSize: "1.5rem", fontFamily: "Alkalami, serif;" }}>Clowak</a>
                    <a className="anchor" style={anchorStyle} href="/">Home</a>
                    <a className="anchor" style={anchorStyle} href="/">About Us</a>
                    <a className="anchor" style={anchorStyle} href="/">Contact</a>
                    <a className="anchor" style={anchorStyle} href="/">Staff</a>
                </div>


            </div>
        </nav>
    )
}
