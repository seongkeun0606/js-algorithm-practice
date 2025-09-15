/**
 * 📌 문제 제목: 대문자와 소문자
 * 🐶 난이도: level 0
 * 
 * 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(my_string) {
    let result = "";
    for(let x of my_string) {
        if(x.toUpperCase() === x) {
            result += x.toLowerCase();
        } else {
            result += x.toUpperCase();
        }
    }
    
    return result;
}