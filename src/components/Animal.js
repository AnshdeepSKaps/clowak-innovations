import React from "react";
import './Animal.css'
import clowak from '../images/clowakimage.jpeg';
function Animal() {
    return (
        <div className="container">
            <div className="bio-text">
                <span class="text"> <b> Our Team </b> </span>
                <br></br>
            </div>
            <div className="content">
                <div className="text1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dui mi.  Phasellus et maximus elit, <br></br>
                    et lacinia mauris. Pellentesque gravida eleifend quam eu facilisis. Proin quis ligula maximus, aliquet dui vitae, volutpat ante. Quisque blandit massa vitae aliquam venenatis. Mauris purus massa, elementum ut dui bibendum, lacinia iaculis massa. Sed molestie dapibus dignissim. <br />
                </div>
            </div>
            <div className="img1">
                <img src={clowak} width="500" height="400" alt="rat" />
            </div>
        </div>
    );
}
export default Animal;