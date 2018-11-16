import React, { Component } from "react";
import "./FieldTrip.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import denali1 from "../../assets/denali1.jpg";
import denali2 from "../../assets/denali2.jpg";
import denali3 from "../../assets/denali3.jpg";
import denali4 from "../../assets/denali4.jpg";

const stops = [
  {
    header: "Glacial Erratic",
    body:
      "The first stop on this field trip is at mile 3.4 on the main road into Denali. Here we will find a glacial erratic. These rocks are foreign to Denali and were transported from far away places. This transportation is possible thanks to glacial forces. Glaciers are also responsible for the current erosion happening in the park. It is estimated that about 15% of Denali is still covered in glaciers.",
    image: denali1,
    link: "https://en.wikipedia.org/wiki/Glacial_erratic"
  },
  {
    header: "Mount Healy",
    body:
      "The next stop is Mount Healy. This geologic feature has some of the oldest rocks in the entire park. There are accretions here from nearly 400 million years ago. That means that these rocks didn’t even form originally on this plate! This whole terrane was accreted and then sutured onto the North American Plate from the Pacific Plate. From Mount Healy, you can gain access to exquisite views of Denali.",
    image: denali2,
    link: "https://www.nps.gov/dena/planyourvisit/unit24.htm"
  },
  {
    header: "Polychrome Overlook",
    body:
      "Further down the road, at mile 45 is the geological wonder known as the Polychrome Overlook. You can observe many igneous rocks that vary drastically in color. This is a good spot to view features sculpted by glacial forces. One of which is a colossal glacial erratic.",
    image: denali3,
    link: "https://www.nps.gov/dena/planyourvisit/unit31.htm"
  },
  {
    header: "Wonder Lake",
    body:
      " Wonder Lake is the final stop of the field trip. This lake doesn’t seem all that wondrous by itself. It actually is only the seventh largest in Denali. What Wonder Lake has to offer is a breathtaking view of the Denali Formation. At just 26 miles from the summit, you can look beyond the lake and see all of Denali’s beautiful peaks.",
    image: denali4,
    link: "https://www.nps.gov/dena/planyourvisit/campground-wonder.htm"
  }
];

const styles = {
  card: {
    maxWidth: 450
  },
  media: {
    height: 180
  }
};

class FieldTrip extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="FieldTrip">
        <Typography variant="h4" align="center" gutterBottom>
          Field Trip Guide
        </Typography>
        {stops.map(stop => (
          <Card
            className={classes.card}
            key={stop.header}
            style={{ margin: 16, alignSelf: "center" }}
          >
            <CardActionArea href={stop.link}>
              <CardMedia
                className={classes.media}
                image={stop.image}
                title={stop.header}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="left"
                >
                  {stop.header}
                </Typography>
                <Typography component="p" align="left">
                  {stop.body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={stop.link}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(FieldTrip);
