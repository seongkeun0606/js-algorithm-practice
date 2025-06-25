/**
 * 📌 문제 제목: 대소문자 변환
 * 
 * 문제 설명: 
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 
 * 소문자로 소문자는 대문자로변환하여 출력하는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(input) {
  let str = "";

  for(let char of input) {
    const code = char.charCodeAt()
    if(code >= 65 && code <= 90) {
      str += char.toLowerCase();
    } else {
      str += char.toUpperCase();
    }
  }

  return str;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}


// ✅ 테스트 코드
const input = "StuDY";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
