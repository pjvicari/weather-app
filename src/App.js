import React, { Component } from 'react';
import './App.css';
import {Paper,AppBar,Typography,Toolbar} from '@material-ui/core';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './Containers/LocationListContainer';
import ForecastExtenderContainer from './Containers/ForecastExtenderContainer';

const cities = [
  'Quetzaltenango,gt',
  'San Marcos,gt',
  'Guatemala City,gt'
];


class App extends Component {
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
          <LocationListContainer cities={cities} ></LocationListContainer>
        </Col>
        <Col xs={12} md={6}>
        <Paper elevation={10}>
          <div className="details">
            <ForecastExtenderContainer></ForecastExtenderContainer>
          </div>
        </Paper>
        </Col>
      </Row>
      </Grid>
    );
  }
}

export default App;