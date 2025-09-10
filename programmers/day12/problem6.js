/**
 * 📌 문제 제목: 이상한 문자 만들기
 * 🐶 난이도: level 0
 * 
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 * 
 */

function solution(s) {
    const arr = s.split(" ")
    const strArr = arr.map((str) => {
        let result = "";
        for(let i = 1; i <= str.length; i++) {
            if(i % 2 === 0) {
                result += str[i - 1].toLowerCase();
            } else {
                result += str[i - 1].toUpperCase();
            }
        }
        return result;
    });
    
    return strArr.join(' ')
}