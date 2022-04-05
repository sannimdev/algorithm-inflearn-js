function solution(n) {
    function factorial(n) {
        if (n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    return factorial(n);
}

console.log(solution(5));
