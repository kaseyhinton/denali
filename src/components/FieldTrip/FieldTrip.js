import React, { Component } from "react";
import "./FieldTrip.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const stops = [
  {
    header: "Glacial Erratic",
    body:
      "The first stop on this field trip is at mile 3.4 on the main road into Denali. Here we will find a glacial erratic. These rocks are foreign to Denali and were transported from far away places. This transportation is possible thanks to glacial forces. Glaciers are also responsible for the current erosion happening in the park. It is estimated that about 15% of Denali is still covered in glaciers.",
    image: ""
  },
  {
    header: "Mount Healy",
    body:
      "The next stop is Mount Healy. This geologic feature has some of the oldest rocks in the entire park. There are accretions here from nearly 400 million years ago. That means that these rocks didn’t even form originally on this plate! This whole terrane was accreted and then sutured onto the North American Plate from the Pacific Plate. From Mount Healy, you can gain access to exquisite views of Denali.",
    image: ""
  },
  {
    header: "Polychrome Overlook",
    body:
      "Further down the road, at mile 45 is the geological wonder known as the Polychrome Overlook. You can observe many igneous rocks that vary drastically in color. This is a good spot to view features sculpted by glacial forces. One of which is a colossal glacial erratic.",
    image: ""
  },
  {
    header: "Wonder Lake",
    body:
      " Wonder Lake is the final stop of the field trip. This lake doesn’t seem all that wondrous by itself. It actually is only the seventh largest in Denali. What Wonder Lake has to offer is a breathtaking view of the Denali Formation. At just 26 miles from the summit, you can look beyond the lake and see all of Denali’s beautiful peaks.",
    image: ""
  }
];

const styles = theme => ({
  root: { marginTop: 32, marginBottom: 32 },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

class FieldTrip extends Component {
  render() {
    return (
      <div className="FieldTrip">
        <Typography variant="h4" align="center" gutterBottom>
          Field Trip Guide
        </Typography>
        {stops.map(stop => (
          <div key={stop.header}>
            <Typography variant="h6" align="center" gutterBottom>
              {stop.header}
            </Typography>
            <Typography align="justify" gutterBottom>
              {stop.body}
            </Typography>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(FieldTrip);
