var pillTaking = (n) => {
    var dp = [...Array(n+1)].map(e => Array(2 * n).fill(0));
    // dp[n][0] = first day n whole pills left  probability
    // dp[i][j] => on 
    for (let i = n
