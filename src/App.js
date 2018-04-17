import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/index.js'
import './App.css';
import Cube from './components/Cube'
import {Route, withRouter} from 'react-router-dom'


class App extends Component {
    state = {
       walls: {
           0: [1, 1],
           1: [1, 1, 1],
           2: [1, 1, 1, 1, 1, 1],
           3: [1, 1],
           4: [1, 1, 1],
           5: [1],
           6: [1, 1, 1, 1, 1, 1, 1],
           7: [1, 1, 1],
           8: [1, 1],
           9: [1, 1]
       }
    };

    render() {
        const {walls} = this.state;

        return (

            <div className='container'>
                <h2 className='header'>Rain app</h2>
                    <Route exact path='/' render={() => (
                        <div className='main'>
                            <div className='walls'>
                                {walls && Object.values(walls).map((wall, i) => (
                                    <div className='wall' key={i}>
                                        {wall && wall.map((cube, j) => (
                                            <Cube key={j} cube={cube}></Cube>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <button id='rain-button' onClick={(e) => this.props.letItRain(walls)}>Let it rain</button>
                        </div>
                    )}/>


            </div>
        )
    }
}

App.propTypes = {
    walls: PropTypes.object.isRequired
}

function mapStateToProps (state, props) {
    return {
        walls: state.walls
    }
}

function mapDispatchToProps (dispatch) {
    return {
        letItRain: (data) => dispatch(actions.letItRain(data))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

