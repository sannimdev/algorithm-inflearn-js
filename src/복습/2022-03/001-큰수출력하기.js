function solution(numbers = []) {
    const size = numbers.length;
    const answer = [numbers[0]];
    for (let i = 1; i < size; i++) {
        const current = numbers[i];
        if (numbers[i - 1] < current) {
            answer.push(current);
        }
    }
    return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
