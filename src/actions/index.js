import * as actionTypes from './actionTypes.js'
import * as calc from '.././utils/calc'

export function letItRainSuccess(wallsWithPuddles) {
    return {type: actionTypes.LET_IT_RAIN_SUCCESS, wallsWithPuddles};
}

export function letItRain(walls) {
    return function(dispatch) {
        const wallsWithPuddles = calc.calcPuddlesBwtWalls(walls);

        return dispatch(letItRainSuccess(wallsWithPuddles));
    };
}