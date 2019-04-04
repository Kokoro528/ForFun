var longest_path = function(flights) {
    let graph = new Map();
    let indgr  = new Map();
    for (let fli of flights) {
        let match = graph.get(fli[0]) || [];
        let [u, v] = fli;
        match.push(fli[1]);
        graph.set(fli[0], match);        
        console.log("u", u);
        let in_v = indgr.get(v) || 0;
        let in_u = indgr.get(u) || 0;
        indgr.set(v, in_v+1);
        indgr.set(u, in_u);

    }
    
    //let visited = new Map();
    let depths = new Map();
    
    console.log("indegrees", indgr);
    console.log("graph", graph);
    zerodgrs = [];
    indgr.forEach((v, k) => {
        if (indgr.get(k) === 0) {
            zerodgrs.push(k);
        }
    });
    
    let dfs = (start, ordered, visited) => {
        console.log("visited", visited);
        if (visited.get(start) === 1) {
            return true;
        }
        else if(visited.get(start) === 2) {
            
            return true;
        }
        else {
            console.log("bungee");
            let nbrs_start = graph.get(start);
            console.log("nbrs_start", nbrs_start);
            visited.set(start, 1);
            if (nbrs_start) {

                for (let nbr of nbrs_start) {
                   console.log("nbr", nbr); 
                    let res = dfs(nbr, ordered, visited);
                    console.log("res", res);   
                    if (!res) {
                        return res;
                    }
                    
                }
            }
            visited.set(start, 2);


            ordered.unshift(start);
            console.log("ordered", ordered);
            return true;
        }
                
    }

    let path = [];
    console.log("zeros", zerodgrs);
    zerodgrs.forEach( (e, i) => {
        let res = [];
        dfs(e,res, new Map());
        
        if (res && res.length > path.length) {
            console.log("paris");
            path = res;
        }
    })

    return path;
    
}





var ans = longest_path([["SFO", "LA"],
["Beijing", "SFO"],
["LA", "Beijing"],
["NY", "LA"],
["STL", "SFO"]
]
);    

console.log("ans", ans);
