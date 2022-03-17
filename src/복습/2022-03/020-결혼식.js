function solution(arr = []) {
    let answer = 0;

    const timeline = arr.reduce((result, [s, e]) => {
        return [...result, [s, 's'], [e, 'e']];
    }, []);
    timeline.sort(([s1, e1], [s2, e2]) => {
        if (s1 === s2) {
            return e1 === 's' ? 1 : -1;
        } else {
            return s1 - s2;
        }
    });

    let count = 0;
    for (let i = 0; i < timeline.length; i++) {
        const [_, type] = timeline[i];
        if (type === 's') count += 1;
        else count -= 1;
        answer = Math.max(count, answer);
    }

    return answer;
}
let arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
];
console.log(solution(arr));
