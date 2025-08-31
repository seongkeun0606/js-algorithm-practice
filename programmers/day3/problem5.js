/**
 * 📌 문제 제목: 특정 문자 제거하기
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
}