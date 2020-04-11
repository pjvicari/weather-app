import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtenderContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtenderContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

const mapStateToProps = ({city}) => ({
    city
  });

  const ForecastExtenderContainerConnected = connect(mapStateToProps,null)(ForecastExtenderContainer);
  
  export default ForecastExtenderContainerConnected;