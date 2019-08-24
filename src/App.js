import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    margin: theme.spacing.unit * 3
  })
});

const App = ({ classes }) => (
  <Paper className={classes.root} elevation={4}></Paper>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
