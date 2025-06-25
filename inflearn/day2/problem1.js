/**
 * 📌 문제 제목: 문자 찾기
 * 
 * 문제 설명:
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
 * 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 */

// 🧑 내 풀이
function mySolution(str, char) {
    let count = 0;

    for(let w of str) {
        if(w === char) {
            count += 1;
        }
    }
    return count;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}


// ✅ 테스트 코드
const str = "COMPUTERPROGRAMMING";
const char = "R";

console.log('🧑 내 답:', mySolution(str, char));
console.log('👨‍🏫 선생님 답:', teacherSolution(str, char));
