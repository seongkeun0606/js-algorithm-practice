/**
 * 📌 문제 제목: 가까운 수
 * 🐶 난이도: level 0
 * 
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(array, n) {
    let closest = array[0];
    let minDiff = Math.abs(array[0] - n);

    for (let i = 1; i < array.length; i++) {
        const diff = Math.abs(array[i] - n);
        if (diff < minDiff) { 
            minDiff = diff;
            closest = array[i];
        } else if (diff === minDiff && array[i] < closest) {
            closest = array[i];
        }
    }

    return closest;
}