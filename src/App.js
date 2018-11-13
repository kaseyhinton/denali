import React, { Component } from "react";
import denali1 from "./assets/denali1.jpg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={denali1} className="App-logo" alt="logo" />
          <h3>Denali National Park and Preserve</h3>
        </header>
        <section>
          <p>
            Denali National Park and Preserve Field Trip Outline The first stop
            on this field trip is at mile 3.4 on the main road into Denali. Here
            we will find a glacial erratic. These rocks are foreign to Denali
            and were transported from far away places. This transportation is
            possible thanks to glacial forces. Glaciers are also responsible for
            the current erosion happening in the park. It is estimated that
            about 15% of Denali is still covered in glaciers.
          </p>
          <Button variant="outlined" color="primary" className="Button">
            Learn More
          </Button>
        </section>
      </div>
    );
  }
}

export default App;
