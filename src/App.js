import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Button from "@material-ui/core/Button";
import Timeline from "./components/Timeline/Timeline";
import FieldTrip from "./components/FieldTrip/FieldTrip";
import Typography from "@material-ui/core/Typography";
import { animateScroll as scroll } from "react-scroll";
import denaliAnnotatedBibliography from './assets/DenaliAnnotatedBibliography.docx';

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
          <Typography
            variant="h3"
            align="center"
            style={{ color: "#fff", marginBottom: 32 }}
          >
            Denali National Park
          </Typography>
          <Button
            onClick={() => {
              setTimeout(() => {
                scroll.scrollTo(this.aboutRef.current.offsetTop - 64);
              }, 300);
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
          <Typography align="justify" gutterBottom>
            Welcome to Denali National Park and Preserve. This field trip guide
            will outline and showcase some of the exciting geologic features
            that Denali has to offer. Before we begin, let us explore the
            background of the park. This mountain is the tallest in all of North
            America. Denali is part of the{" "}
            <a
              className="App-link"
              href="https://www.britannica.com/place/Alaska-Range"
            >
              Alaskan Range
            </a>
            . This range spans nearly 400 miles! Denali's formation began about
            400 million years ago when{" "}
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Accretion_(geology)"
            >
              accretions
            </a>{" "}
            began suturing onto the North American Plate from the Pacific Plate.
            Fast forward 200 million years, where the Earth was undergoing a
            mountain building event called the{" "}
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Sevier_orogeny"
            >
              Sevier
            </a>{" "}
            Orogeny. There was volcanic activity all around and a large magma
            chamber began to form. After the Sevier comes the{" "}
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Laramide_orogeny"
            >
              Laramide
            </a>{" "}
            Orogeny where volcanic activity began to stop due to shallow plate
            subduction. The giant magma chamber cooled during this time, which
            formed a giant mass of granite referred to as a granitic{" "}
            <a className="App-link" href="https://en.wikipedia.org/wiki/Pluton">
              pluton
            </a>
            . If you were to jump forward 30 million years into the future, you
            would see Slab Rollback. The subducting plate had rolled back
            westward and allowed for massive volcanic activity. After rollback
            occurred there was then major uplift due to faulting. This happened
            around 30 million years ago. During this phase, Denali was raised
            high into the sky. The uplift of Denali allowed the weaker
            sedimentary layers surrounding the now cooled magma chamber to be
            exposed and erode. When enough of the outer layer eroded what was
            left was the resistant granite that is Denali as we know it today.
          </Typography>
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <FieldTrip />
        </section>
        <section>
          <Typography variant="h4" align="center" gutterBottom>
            Bibliography
          </Typography>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href={denaliAnnotatedBibliography}
            download="Denali Annotated Bibliography"
          >
            Download Annotated Bibliography
          </a>
        </section>
      </div>
    );
  }
}

export default App;
