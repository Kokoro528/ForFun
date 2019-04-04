/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z)    return false;
    
    if (z === 0)    return true;
    
    var gcd = function(a, b) {
        if (a < b) {
            a, b = b, a;
        }
        while (b !== 0) {
            var temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
    
    return z % gcd(x, y) === 0;
};
