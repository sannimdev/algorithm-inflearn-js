function solution(N) {
    const answer = [1, 2];

    for (let i = 2; i < N; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }

    return answer.pop();
}

console.log(solution(7));
