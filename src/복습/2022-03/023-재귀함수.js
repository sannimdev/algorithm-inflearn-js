function solution(n) {
    return dfs(3);

    function dfs(L) {
        if (L === 0) return;
        else {
            dfs(L - 1);
            console.log(L);
        }
    }
}

console.log(solution(3));
