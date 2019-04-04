/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    var maxPile = piles.reduce((a, b) => a > b?a:b, 0);
    // console.log(maxPile);
    var l = 1, r = maxPile + 1;
    var f = function(x, h) {
        for (pile of piles) {
            // console.log(pile);
            h += Math.ceil(pile/x);
        }
        return h;
    }
    while ( l < r) {
        var m = l + Math.floor((r - l)/2);
        var h = f(m, 0);
        if ( h <= H) {
            r = m;
        }
        else {
            l = m + 1;
        }
    }
    return l;
};
