var findClosestElements = function(arr, k, x) {
    // find the largestEqualSmaller one than x first
    var largestEqualSmaller = (arr, x) => {
        let left = 0;
        let right = arr.length-1;
        while (left < right - 1) {
            let mid = left + Math.floor((right -left)/2);
            console.log("mid" + mid);
            if (arr[mid] <= x) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        if (arr[right] <= x) {
            return right;
        }
        if (arr[left] <= x) {
            return left;
        }
        return -1;
    
    }
    // find the closest one
    var largestSmaller = largestEqualSmaller(arr, x);
    console.log(largestSmaller);
    if (largestSmaller == -1) {
        return arr.slice(0, k);
    }
    else {
        let l = largestSmaller;
        let r = l + 1;
        var ans = [];
        for (let i = 0; i < k; i++) {
            if (r >= arr.length || (l >= 0 && x - arr[l] <= arr[r] - x)) {
                ans.push(arr[l--]);
            }
            else {
                ans.push(arr[r++]);
            }
        }
        
       
        
        return ans.sort((a, b) => a - b);
    }
    
    
    
};// test

console.log(findClosestElements([1,4,45,78,79,80,82,100,101],2,101));

