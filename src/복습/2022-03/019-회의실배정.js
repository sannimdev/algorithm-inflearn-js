function solution(timetables) {
    let answer = 1;
    timetables.sort(([s1, e1], [s2, e2]) => (e1 !== e2 ? e1 - e2 : s1 - s2));
    console.log('sorted', timetables);
    let time = timetables[0];
    for (let i = 1; i < timetables.length; i++) {
        const [prevStart, prevEnd] = time;
        const [start, end] = timetables[i];
        if (prevEnd <= start) {
            console.log([prevStart, prevEnd], [start, end]);
            answer += 1;
            time = [start, end];
        }
    }
    return answer;
}

let arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];
//////////// 반례 조심
let arr2 = [
    [3, 3],
    [1, 3],
    [2, 3],
];
console.log(solution(arr2));
