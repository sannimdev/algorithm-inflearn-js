function solution(arr = []) {
    let answer = [];

    const sorted = arr.slice().sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            answer.push(arr[i], sorted[i]);
            return answer;
        }
    }

    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
console.log(solution([120, 130, 150, 150, 130, 150]));
