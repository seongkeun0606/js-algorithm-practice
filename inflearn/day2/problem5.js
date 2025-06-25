/**
 * 📌 문제 제목: 가장 긴 문자열
 * 
 * 문제 설명: 
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(input) {
    let maxLength = "", index = 0;

    for(let i = 0; i < input.length; i++) {
      const cur = input[i];
      
      if(cur.length > maxLength) {
        maxLength = cur.length;
        index = i;
      }
    }

    return input[index];
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

// ✅ 테스트 코드
const input = ["teacher", "time", "student", "beautiful", "good"];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
