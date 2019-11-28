import React, { Component } from 'react';
import './App.css';
import {Paper,AppBar,Typography,Toolbar} from '@material-ui/core';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const cities = [
  'Quetzaltenango,gt',
  'San Marcos,gt',
  'Guatemala City,gt'
];
class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
    return (
      <Grid fluid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          {/* <WheatherLocation city="San Marcos,gt"></WheatherLocation> */}
          <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectionLocation }></LocationList>
        </Col>
        <Col xs={12} md={6}>
        <Paper elevation={10}>
          <div className="details"></div>
        </Paper>
        </Col>
      </Row>
      </Grid>
    );
  }
}

export default App;
