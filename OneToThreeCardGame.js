const maxSum = arr => {
    maxArr = Array(arr.length + 1);
    maxArr[0] = 0;
    for (var i = 1; i < arr.length+1; i++) {
        int curMax = 0;
        for (var  j = 0; j < 3; i++) {
            if (i - j - 1 > 0 && maxArr[j-i-1] + arr[i-1] > maxArr[i]) {
                maxArr[i] = maxArr[j-i-1] + arr[i-1];
            }
        }
    }
    return maxArr[arr.length];
}
