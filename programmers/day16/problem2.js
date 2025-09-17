/**
 * 📌 문제 제목: 제곱수 판별하기
 * 🐶 난이도: level 0
 * 
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
 * 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(n) {
    const s = Math.sqrt(n);
    return s === Math.round(s) ? 1 : 2;
}