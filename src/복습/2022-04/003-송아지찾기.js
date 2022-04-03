function solution(S, E) {
    const trace = Array.from({ length: 10001 }, () => 0);
    const queue = [S];

    while (queue.length) {
        const cur = queue.shift();

        for (const next of [cur + 1, cur - 1, cur + 5]) {
            if (next === E) {
                return trace[cur] + 1;
            }
            if (trace[next] === 0) {
                trace[next] = trace[cur] + 1;
                queue.push(next);
            }
        }
    }

    return -1;
}
console.log(solution(5, 14));
