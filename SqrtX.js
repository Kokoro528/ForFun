/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {   
    var binarySearch = function (left, right) {
        console.log(left, right)
        if (left >= right) {
            return Math.pow(left, 2) > x? left-1: left;
        }
        var mid = Math.floor(left + (right - left)/2);
        console.log(mid)
        if (Math.pow(mid, 2) > x) {
            right = mid-1;
        }
        else if (Math.pow(mid, 2) === x) {
            return mid;
        }
        else {
            left = mid+1;
        }
        return binarySearch(left, right)
    }
    
    return binarySearch(0, x);
};
