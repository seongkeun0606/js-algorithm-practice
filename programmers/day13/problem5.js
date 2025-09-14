/**
 * 📌 문제 제목: 두 수의 합
 * 🐶 난이도: level 0
 * 
 * 0 이상의 두 정수가 문자열 a, b로 주어질 때, 
 * a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(a, b) {
    const sum = BigInt(a) + BigInt(b);
    return sum.toString();
}