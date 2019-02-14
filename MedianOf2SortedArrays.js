/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var n1 = nums1.length;
    var n2 = nums2.length;
    if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
    let k = Math.ceil((n1 + n2)/2);
    let l = 0;
    let r = n1;
    while ( l < r) {
        let m1 = l + Math.floor((r - l)/2);
        let m2 = k - m1;
        
        if (nums1[m1] < nums2[m2-1]) {
            l = m1 + 1;
        }
        else {
            r = m1;
        }
    }
    let c1 = Math.max(l - 1 < 0? -Infinity: nums1[l-1], k - l -1 < 0? -Infinity: nums2[k - l -1]);
    if ((n1 + n2) %2 === 1) {
        return c1;
    }
    let c2 = Math.min(l >= nums1.length?Infinity: nums1[l], k - l >= nums2.length?Infinity: nums2[k - l]);
    return (c1 + c2)/2;
    
};
