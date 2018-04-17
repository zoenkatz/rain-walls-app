export const calcPuddlesBwtWalls = (walls) => {
    let puddlesSpliceArr = [];
    let puddlesArr = [];
    let startWall = 0;
    let wallArr = [];

    const valuesArr = Object.values(walls);

    if(!valuesArr.length){
        return 0;
    }

    for(const value of valuesArr){
        wallArr.push(value.length);
    }

    for(let i = 0; i < wallArr.length - 1; i++){
        if(wallArr[i] > wallArr[i + 1] && !startWall){

            startWall = wallArr[i];
            puddlesSpliceArr = wallArr.splice(i);

            for(let j = 0; j < puddlesSpliceArr.length; j++){
                if(puddlesSpliceArr[j] <= startWall){
                    puddlesArr.push({diff: startWall - puddlesSpliceArr[j], index: i + j});
                }
                else{
                    break;
                }

            }

             puddlesArr.map((puddle) => {
                 for(let x = 0; x < puddle.diff; x++) {
                     walls[puddle.index].push(0);
                     if(x === puddle.diff - 1){
                         walls[puddle.index].reverse();
                     }
                }
            });

            return walls;


        }


    }
};