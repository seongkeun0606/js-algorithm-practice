/**
 * 📌 문제 제목: 뒤집힌 문자열
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(my_string) {
    return [...my_string].reverse().join('')
}