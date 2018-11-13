import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Button from "@material-ui/core/Button";
import Timeline from "./components/Timeline/Timeline";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <Typography variant="h3" align="center" style={{ color: "#fff" }}>
            Denali National Park
          </Typography>
          <Button
            onClick={() => {
              window.scroll({
                top: this.aboutRef.current.offsetTop - 64,
                behavior: "smooth"
              });
            }}
            variant="outlined"
            style={{
              maxWidth: 200,
              borderColor: "#fff",
              color: "#fff",
              marginTop: 32
            }}
            className="Button"
          >
            Learn More
          </Button>
        </header>
        <section ref={this.aboutRef}>
          <Typography variant="h4" align="center" gutterBottom>
            About Denali
          </Typography>
          <Typography
            align="justify"
            gutterBottom
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Denali National Park and Preserve Field Trip Outline The first stop
            on this field trip is at mile 3.4 on the main road into Denali. Here
            we will find a glacial erratic. These rocks are foreign to Denali
            and were transported from far away places. This transportation is
            possible thanks to glacial forces. Glaciers are also responsible for
            the current erosion happening in the park. It is estimated that
            about 15% of Denali is still covered in glaciers.
          </Typography>
        </section>
        <section>
          <Timeline />
        </section>
      </div>
    );
  }
}

export default App;
