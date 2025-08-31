/**
 * 📌 문제 제목: 모음 제거
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    
    return [...my_string].filter((char) => !vowels.includes(char)).join('')
}