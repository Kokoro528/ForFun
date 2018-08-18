var isMatch = function(s, p) {
var matches = (i,j) => {
    if (s[i] === p[j] || p[j] ==='.')
        return true;
    return false;
}
     var dp = [...Array(s.length+1)].map(e => Array(p.length+1).fill(false));
    for (let j = 0; j < p.length + 1; j++) {
        for (let i = 0; i < s.length + 1; i++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
            }
            else if (i === 0) {
                dp[i][j] = p[j-1]==='*' && dp[i][j-2];
            }
            else if (j != 0 && i != 0) {
                if (p[j-1] === '*') {
                    dp[i][j] = dp[i][j-2]  || (dp[i-1][j] && matches(i-1,j-2));
                }
                else {
                    dp[i][j] = (dp[i-1][j-1]) && matches(i-1,j-1)
                }
            }
        }
    }

    return dp[s.length][p.length];
};

export default isMatch;
