import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Cube extends React.Component {


    render() {
        const {cube} = this.props;
        return (
            cube? <div className='wall-cube'></div> : <div className='puddle-cube'></div>
        );
    }
}

Cube.propTypes = {
    cube: PropTypes.number.isRequired
};

export default Cube;