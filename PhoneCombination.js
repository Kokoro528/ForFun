/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    var dict = new Map([[0, ""], [1, ""], [2, "abc"], [3, "def"], [4, "ghi"],[5, "jkl"], [6, "mno"], [7, "pqrs"], [8, "tuv"], [9, "wxyz"]]);
    var res = [];
    var backtracking = (curComb, index, digits) => {
        if (index === digits.length) {
            if  (index > 0)
                res.push(curComb.join(''))
            return;
        } 
        // console.log(dict.get(parseInt(digits[index], 10)))
        var mapping = dict.get(parseInt(digits[index], 10));
        for (let c of mapping) {
            // console.log(c)
            curComb.push(c)
            backtracking(curComb, index+1, digits);
            curComb.pop()
            
        }
    }
    backtracking([], 0, digits)
    return res;
    
};
