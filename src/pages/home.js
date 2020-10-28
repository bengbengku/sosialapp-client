import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

class home extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          <p>Content here...</p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile here...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
