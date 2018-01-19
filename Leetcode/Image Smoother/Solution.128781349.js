/**
 * @param {number[][]} M
 * @return {number[][]}
 */


 var directions = [
        [-1, 1], [0, 1], [1, 1],
        [-1, 0], [0, 0], [1, 0],
        [-1,-1], [0,-1], [1,-1]];


function getAverage(i, j, M){
    var count = 0;
    var sum = 0;
    for(var k = 0; k<directions.length; k++){
        if(directions[k][0] + i >= 0 && directions[k][0] + i <  M.length && directions[k][1] + j >= 0 && directions[k][1] + j < M[0].length){
            count++;
            sum += M[directions[k][0] + i][directions[k][1] + j];
        }
    }
 
    return Math.floor(sum/count);
}


var imageSmoother = function(M) {
   
    var O = [];
    for(var i=0; i<M.length; i++){
        O.push([]);
        for(var j=0; j<M[i].length; j++){
            O[i].push(getAverage(i, j, M))
        }
    }
 
    return O;
};