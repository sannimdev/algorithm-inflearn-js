function solution(n, m) {
    const answer = [];
    const cases = Array.from({ length: m }, () => 0);
    dfs(0);
    function dfs(L) {
        if (L >= m) {
            answer.push(cases.slice());
            return;
        } else {
            for (let i = 1; i <= n; i++) {
                cases[L] = i;
                dfs(L + 1);
            }
        }
    }

    return answer;
}

console.log(solution(3, 2));
