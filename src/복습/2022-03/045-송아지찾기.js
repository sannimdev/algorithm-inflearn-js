function solution(S /* 현수의 위치 */, E /* 송아지 위치 */) {
    const queue = [S];
    const trace = Array.from({ length: 10001 }, () => 0);

    while (queue.length) {
        const cur = queue.shift();

        for (const next of [cur + 1, cur - 1, cur + 5]) {
            if (trace[next] === 0) {
                trace[next] = trace[cur] + 1;
                if (next === E) {
                    return trace[next];
                }
                queue.push(next);
            }
        }
    }

    return -1;
}
console.log(solution(5, 14));
