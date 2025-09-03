/**
 * 📌 문제 제목: A 강조하기
 * 🐶 난이도: level 0
 * 
 * 문자열 myString이 주어집니다. 
 * myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, 
 * "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
 * 
 */

function solution(myString) {
    let answer = '';

    for(let i = 0; i < myString.length; i++) {
        const cur = myString[i];
        if(cur === 'a' || cur === 'A') {
            answer += "A";
        } else if(cur === ' '){
            answer += ' '
        } else {
            answer += cur.toLowerCase();
        }
    }
    
    return answer;
}