// 다이내믹이래...

function solution(arr) {
    let answer = 0;
    const ch = Array.from({ length: arr.length }, () => 0);
    ch[0] = 1;

    for (let i = 1; i < arr.length; i++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j] && ch[j] > max) {
                max = ch[j];
            }
        }
        ch[i] = max + 1;
        answer = Math.max(answer, ch[i]);
    }

    return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
