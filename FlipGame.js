/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var res = flip(s.split(''));
    return res.map(e => e.join(''));
};

// takes in an character array and change flip each two consecutive pair
var flip = function(arr){
    var res = [];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] === '+' && arr[i+1] === '+') {
            let tmp = arr.slice();
            tmp[i] = tmp[i+1] = '-';
            res.push(tmp);
            
        }
    }
    return res;
}
