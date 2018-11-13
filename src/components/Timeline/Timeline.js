import React, { Component } from "react";
import "./Timeline.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
function getSteps() {
  return [
    "400 Million Years Ago",
    "200 Million Years Ago",
    "56 Million Years Ago",
    "30 Million Years Ago",
    "Present Day"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem Ipsum.`;
    case 1:
      return "Pieces of crust are carried northward by faulting on the Pacific and North American plate boundary. These terranes began adding crustal area to the North American Plate. The faulting and folding that occur here set the tectonic settings for the formation of Denali. The thickening of the crust happening here is responsible for the high elevation of the entire Alaska Range.";
    case 2:
      return `The Pacific Plate sub-ducts under North American Plate. Volcanoes are erupting near future Denali. A giant chamber of magma is cooled rapidly deep in the Earth. Tectonic forces begin lifting this body of intrusive igneous granite upward. This body is also known as a granitic pluton.`;
    case 3:
      return `Faulting begins to occur on the Denali Fault and Hines Creek Fault that contribute to the uplift. The composition of Denali (igneous granite) makes it resistant to erosion and less dense than the rocks surrounding it which also helps with uplift. Due to the faulting and uplifting that continues to occur the sedimentary material surrounding the mountain gets stripped away slowly by erosion and weathering.`;
    case 4:
      return `Glacier movement is now the main force of erosion. These glaciers along with tectonic uplift are responsible for shaping Denali's future landscape.`;
    default:
      return "Unknown step";
  }
}

class Timeline extends Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" gutterBottom>
          Geologic Timeline
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography align="justify" gutterBottom>
                    {getStepContent(index)}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography gutterBottom align="center">
              Thanks for reading this brief history of Denali's Geology!
            </Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

Timeline.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Timeline);
