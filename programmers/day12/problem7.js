/**
 * 📌 문제 제목: 이진수 더하기
 * 🐶 난이도: level 0
 * 
 * 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(bin1, bin2) {
    const a = parseInt(bin1, 2)
    const b = parseInt(bin2, 2)
    
    const sum = a + b;
    
    return sum.toString(2)
}