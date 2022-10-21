import React from 'react'
import '../styles.css'
import logo from '../images/logo.png'

export default function navbar() {

    const anchorStyle = {
        // textDecoration: "none",
        fontSize: "1.2rem"
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1.5rem"
    }

    return (
        <nav className="navbar" style={{ background: "rgba(98,190,31,1)", width: "100vw", position: "fixed" }}>
            <div className="container-fluid justify-content-between">

                <div className="d-flex justify-content-center" style={{
                    background: "white"
                }}>
                    <img src={logo} height="50px" alt="" />
                    <a className="navbar-brand" href="/" style={{ justifySelf: "left", fontSize: "1.5rem", fontFamily: "Alkalami, serif;" }}>Clowak</a>
                </div>

                <div className="justify-content-center align-items-center" style={gridStyle}>
                    <a className="anchor" style={anchorStyle} href="/">Home</a>
                    <a className="anchor" style={anchorStyle} href="/">About Us</a>
                    <a className="anchor" style={anchorStyle} href="/">Contact</a>
                    <a className="anchor" style={anchorStyle} href="/">Staff</a>
                </div>

                <div>
                    <div className="btn d-flex align-items-center justify-content-center" style={{
                        background: "#FE8A03",
                        height: "40px",
                        width: "140px",
                        padding: "10px",
                        color: "white",
                        fontWeight: "500"
                    }
                    }>Make an Order</div>
                </div>


            </div>
        </nav>
    )
}
