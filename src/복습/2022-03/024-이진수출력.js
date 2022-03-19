function solution(n) {
    const answer = [];
    DFS(n);
    function DFS(n) {
        if (n === 0) return;
        else {
            const r = parseInt(n % 2);
            DFS(parseInt(n / 2));
            answer.push(r);
        }
    }

    return answer.join('');
}

console.log(solution(10));
