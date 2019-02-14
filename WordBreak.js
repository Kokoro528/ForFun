/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (wordDict == false || s == false) {
        return false;
    }
    var dp = Array(s.length+1).fill(false);
    wordDict.sort((a, b) => a.length - b.length);
    
    dp[0] = true;
    console.log(wordDict);
    for (var i = wordDict[0].length; i <= s.length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            // see if s[i, j] is in wordDict
            if (wordDict.includes(s.substring(j, i)) && dp[j]) {
                dp[i] = true;
            }
        }
    }
    
    return dp[s.length];
};
