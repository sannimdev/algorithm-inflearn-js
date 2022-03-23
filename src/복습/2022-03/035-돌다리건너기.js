function solution(N) {
    const answer = [1, 2];

    for (let i = 1; i < N; i++) {
        answer.push(answer[i - 1] + answer[i]);
    }

    return answer.pop();
}

console.log(solution(7));
