import React from "react";
import logo from "../images/logo.png";
import './body.css';

function Body() {

  const cardStyle = {
    margin: "0"
  }

  return (
    <div class="card-deck align-items-center justify-content-around" style={{}}>

      <div class="card" style={{ cardStyle }}>
        <img class="card-img-top logo" src={logo} alt="C2" />
        <hr />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Clowak Innovations introduces<br></br>
            Portable Dental Clinic (PDC), <br></br>
            is portable dentistry equipment ideal <br></br>
            for use for domiciliary, military,humanitarian and normally  <br></br>
            inaccessible environments.<br></br>

            ​</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="card" style={{ cardStyle }}>
        <img class="card-img-top logo" src={logo} alt="C2" />
        <hr />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Clowak Innovations introduces<br></br>
            Portable Dental Clinic (PDC), <br></br>
            is portable dentistry equipment ideal <br></br>
            for use for domiciliary, military,humanitarian and normally  <br></br>
            inaccessible environments.<br></br>

            ​</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="card" style={{ cardStyle }}>
        <img class="card-img-top logo" src={logo} alt="C2" />
        <hr />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Clowak Innovations introduces<br></br>
            Portable Dental Clinic (PDC), <br></br>
            is portable dentistry equipment ideal <br></br>
            for use for domiciliary, military,humanitarian and normally  <br></br>
            inaccessible environments.<br></br>

            ​</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

    </div>
  );
}
export default Body;
