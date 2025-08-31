/**
 * 📌 문제 제목: 두 정수 사의 합
 * 🐶 난이도: level 0
 * 
 * 문제 설명: 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 * 
 */

function solution(a, b) {
    let sum = 0;
    const bigger = a > b ? a : b;
    const smaller = a > b ? b : a;
    
    
    for(let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    
    return sum;
}