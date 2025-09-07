/**
 * 📌 문제 제목: 문자열이 몇 번 등장하는지 세기
 * 🐶 난이도: level 0
 * 
 * 문자열 myString과 pat이 주어집니다. 
 * myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(myString, pat) {
    let count = 0;
    
    for(let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) count++
    }
        
    return count;
}