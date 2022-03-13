function solution(arr) {
    const rankCount = arr.length;
    const studentCount = arr[0].length;
    const cases = [];
    for (let i = 1; i <= studentCount; i++) {
        // 멘토 자리 순회
        for (let j = 1; j <= studentCount; j++) {
            // 멘티 자리 순회
            if (i === j) continue;
            let cnt = 0;
            for (let k = 0; k < rankCount; k++) {
                let mentoRank = 0;
                let menteeRank = 0;
                for (let s = 0; s < studentCount; s++) {
                    if (arr[k][s] === i) mentoRank = s;
                    if (arr[k][s] === j) menteeRank = s;
                }
                if (mentoRank < menteeRank) cnt++;
            }
            if (cnt === rankCount) {
                cases.push([i, j]);
            }
        }
    }

    const answer = cases.length;
    return answer;
}

const arr = [
    [3, 4, 1, 2], // 3번 학생이 1등...
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
