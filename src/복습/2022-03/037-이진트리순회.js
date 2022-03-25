function solution(n) {
    const answer = [];
    dfs(1);
    function dfs(L) {
        if (L > n) {
            return;
        } else {
            answer.push(L);
            dfs(L * 2);
            // answer.push(L); // 중위
            dfs(L * 2 + 1);
            // answer.push(L); // 후위
        }
    }
    return answer;
}
console.log(solution(7));
