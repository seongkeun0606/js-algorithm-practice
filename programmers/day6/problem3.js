/**
 * 📌 문제 제목: l로 만들기
 * 🐶 난이도: level 0
 * 
 * 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
 * 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(myString) {
    let result = "";
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') {
            result += "l";
        } else {
            result += myString[i];
        }
    }
    
    return result;
}
