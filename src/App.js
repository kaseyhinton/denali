import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Button from "@material-ui/core/Button";
import Timeline from "./components/Timeline/Timeline";
import FieldTrip from "./components/FieldTrip/FieldTrip";
import Typography from "@material-ui/core/Typography";
import { animateScroll as scroll } from "react-scroll";
import denaliAnnotatedBibliography from "./assets/DenaliAnnotatedBibliography.docx";

const OFFSET_TOP = 72;
const SCROLL_DELAY = 300;

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.geologicTimelineRef = React.createRef();
    this.fieldTripGuideRef = React.createRef();
    this.bibliographyRef = React.createRef();
  }

  scrollToRef(ref) {
    setTimeout(() => {
      scroll.scrollTo(ref.current.offsetTop - OFFSET_TOP);
    }, SCROLL_DELAY);
  }

  scrollToAbout() {
    this.scrollToRef(this.aboutRef);
  }

  scrollToGeologicTimeline() {
    this.scrollToRef(this.geologicTimelineRef);
  }

  scrollToFieldTripGuide() {
    this.scrollToRef(this.fieldTripGuideRef);
  }

  scrollToBibliography() {
    this.scrollToRef(this.bibliographyRef);
  }

  render() {
    return (
      <div className="App">
        <Nav
          scrollToAbout={this.scrollToAbout.bind(this)}
          scrollToGeologicTimeline={this.scrollToGeologicTimeline.bind(this)}
          scrollToFieldTripGuide={this.scrollToFieldTripGuide.bind(this)}
          scrollToBibliography={this.scrollToBibliography.bind(this)}
        />
        <header className="App-header">
          <Typography
            variant="h3"
            align="center"
            style={{ color: "#fff", marginBottom: 32 }}
          >
            Denali National Park
          </Typography>
          <Button
            onClick={this.scrollToAbout.bind(this)}
            variant="outlined"
            style={{
              maxWidth: 200,
              borderColor: "#fff",
              color: "#fff"
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
            variant="body1"
            style={{
              maxWidth: 450,
              margin: "8px auto",
              lineHeight: 1.6,
              fontSize: 15
            }}
          >
            Welcome to Denali National Park and Preserve. This field trip guide
            will outline and showcase some of the exciting geologic features
            that Denali has to offer. Before we begin, let us explore the
            background of the park. This mountain is the tallest in all of North
            America. Denali is part of the{" "}
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.britannica.com/place/Alaska-Range"
            >
              Alaskan Range
            </a>
            . This range spans nearly 400 miles!
          </Typography>
          <Typography
            align="justify"
            gutterBottom
            variant="body1"
            style={{
              maxWidth: 450,
              margin: "8px auto",
              lineHeight: 1.6,
              fontSize: 15
            }}
          >
            {" "}
            Denali's formation began about 400 million years ago when{" "}
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Accretion_(geology)"
              target="_blank"
              rel="noopener noreferrer"
            >
              accretions
            </a>{" "}
            began suturing onto the North American Plate from the Pacific Plate.
          </Typography>
          <Typography
            align="justify"
            gutterBottom
            variant="body1"
            style={{
              maxWidth: 450,
              margin: "8px auto",
              lineHeight: 1.6,
              fontSize: 15
            }}
          >
            Deep underneath the earth a massive magma chamber cooled, which
            formed a giant mass of granite referred to as a granitic{" "}
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Pluton"
              target="_blank"
              rel="noopener noreferrer"
            >
              pluton
            </a>
            .
          </Typography>
          <Typography
            align="justify"
            gutterBottom
            variant="body1"
            style={{
              maxWidth: 450,
              margin: "8px auto",
              lineHeight: 1.6,
              fontSize: 15
            }}
          >
            After the granitic pluton cooled, Denali was then uplifted. The
            uplift of Denali allowed the weaker sedimentary layers surrounding
            the now cooled magma chamber to be exposed and erode. When enough of
            the outer layer eroded what was left was the resistant granite that
            is Denali as we know it today.
          </Typography>
        </section>
        <section ref={this.geologicTimelineRef}>
          <Timeline />
        </section>
        <section ref={this.fieldTripGuideRef}>
          <FieldTrip />
        </section>
        <section ref={this.bibliographyRef}>
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
        <section>
          <Typography
            align="justify"
            gutterBottom
            variant="body1"
            style={{
              maxWidth: 450,
              margin: "0 auto",
              lineHeight: 1.6,
              fontSize: 13
            }}
          >
            <i>
              This website was made to fulfill the requirements of a school
              geology project while I was attending Southern Utah University. I
              will keep providing the hosting and continued development of this
              application for free because Denali is awesome! Please contact me
              if you would like to see revisions to any of this content. I am
              also open to new ideas for adding additional information to make
              this website more accurate and useful.
            </i>
          </Typography>
        </section>
        <section style={{ marginBottom: 8 }}>
          <Typography align="center" gutterBottom>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kaseyhinton"
              style={{ marginRight: 16 }}
            >
              &copy; Kasey Hinton {new Date().getFullYear()}
            </a>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kaseyjameshinton@gmail.com"
              title="Get in touch with me and let me know what you think"
              style={{ marginRight: 16 }}
            >
              Contact
            </a>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kaseyhinton/denali"
              title="Propose changes to content or add additional information"
            >
              Contribute
            </a>
          </Typography>
        </section>
      </div>
    );
  }
}

export default App;
