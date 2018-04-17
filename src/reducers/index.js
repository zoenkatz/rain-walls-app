import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'

function walls(state = {}, action) {
    switch (action.type) {
        case actionTypes.LET_IT_RAIN_SUCCESS:
            return action.wallsWithPuddles;
        default :
            return state
    }
}

export default combineReducers({
    walls
})