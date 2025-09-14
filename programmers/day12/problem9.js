/**
 * 📌 문제 제목: flag에 따라 다른 값 반환하기
 * 🐶 난이도: level 0
 * 
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, 
 * flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(a, b, flag) {
    if(flag) {
        return a + b;
    }
    return a - b;
}