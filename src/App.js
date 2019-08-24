import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
<<<<<<< HEAD
import Typography from "material-ui/Typography";
=======
>>>>>>> test3

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
<<<<<<< HEAD
    paddingBottom: 16,
=======
>>>>>>> test3
    margin: theme.spacing.unit * 3
  })
});

const App = ({ classes }) => (
<<<<<<< HEAD
  <Paper className={classes.root} elevation={4}>
    <Typography type="headline" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography type="body1" component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>
=======
  <Paper className={classes.root} elevation={4}></Paper>
>>>>>>> test3
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
