function solution(numbers = [], N) {
    const tmp = Array.from(numbers.length, () => 0);
    const answer = [];

    DFS();

    function DFS(L = 0, start = 0) {
        if (L === N) {
            answer.push(tmp.slice());
        } else {
            for (let i = start; i < numbers.length; i++) {
                tmp[L] = numbers[i];
                DFS(L + 1, i + 1);
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 3], 2));
