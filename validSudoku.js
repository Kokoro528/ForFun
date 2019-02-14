var isValidSudoku = function(board) {
    var n = board.length;
    for (let i = 0; i < n; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== '.') {
                if (rowSet.has(board[i][j])) {
                    return false;
                }
                rowSet.add(board[i][j]);
            }
            if (board[j][i] !== '.') {
                if (colSet.has(board[j][i])) {
                    return false;
                }
                colSet.add(board[j][i]);
            }
        }
    }
        
        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let subbox = new Set();
                
                for (let ii = 0; ii < 3; ii++ ) {
                    for (let jj = 0; jj < 3; jj++) {
                        let v = i * 3 + ii;
                        let p = j * 3 + jj;
                        if (board[v][p] !== '.') {
                            if (subbox.has(board[v][p])) {
                                return false;
                            }
                            subbox.add(board[v][p]);
                        }
                    }
                }
                
            }
        }
    
        
        return true;
    
};
