function solution(m, songs) {
    let answer = 0;

    // STEP1. 최소구간~최대구간 정하기
    let lt = Math.max(...songs);
    let rt = songs.reduce((result, current) => result + current, 0);

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2); // CD 길이
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    return answer;
}

function count(songs, capacity) {
    let cnt = 1,
        sum = 0;
    for (let x of songs) {
        if (sum + x > capacity) {
            cnt += 1;
            sum = x;
        } else {
            sum += x;
        }
    }
    return cnt;
}

// N개의 노래, M개의 DVD에 동영상 녹화 (단, M개의 DVD는 모두 동일한 크기)
console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 순서는 유지해야 한다.
