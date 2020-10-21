import React, { Component } from "react";
import "./Nav.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            onClick={() => {
              this.props.scrollToAbout();
            }}
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.props.scrollToGeologicTimeline();
            }}
          >
            <ListItemText primary="Geologic Timeline" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.props.scrollToFieldTripGuide();
            }}
          >
            <ListItemText primary="Field Trip Guide" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.props.scrollToResources();
            }}
          >
            <ListItemText primary="Additional Resources" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <SwipeableDrawer
          open={this.state.open}
          onClose={() => this.toggleDrawer()}
          onOpen={() => this.toggleDrawer()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer()}
            onKeyDown={() => this.toggleDrawer()}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              style={{ position: "relative", left: -20 }}
            >
              Denali
            </Typography>
            <div>
              <IconButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
