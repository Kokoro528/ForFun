var threeSum = function(nums) {
    
    var cp = nums.slice();
    cp.sort((a, b) => a - b);
    var move2Next = (i, dir) => {
        let cur = cp[i];
        let j = i;
        while (0 <= j && j < cp.length) {
            if (cp[j] != cur) {
                return j;
            } 
            j += dir;
        }
    }
    var res = [];
    let l = 0;
    let r = cp.length-1;
    let k = 0;
    while( k < cp.length) {
        let i = k + 1;
        let j = r;
        while ( i < j ) {
            
                let curSum = cp[k] + cp[i] + cp[j];
                if (curSum < 0 ) {
                    i = move2Next(i, 1);
                }
                else if (curSum > 0) {
                    j = move2Next(j, -1);
                }
                else {
                    res.push([cp[k], cp[i], cp[j]]);
                    i = move2Next(i, 1);
                    // j = move2Next(j, -1);
                }
            }
        
        k = move2Next(k, 1);
    }
    return res;
};

// should print out [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
