/**
 * 📌 문제 제목: 가운데 문자 출력
 * 
 * 문제 설명: 
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */

// 🧑 내 풀이
function mySolution(input) {
    if(input.length % 2 === 0) {
      const idx = input.length / 2;
      return `${input[idx - 1]}${input[idx]}`
    } else {
      const idx = Math.floor(input.length / 2);
      return input[idx];
    }
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}


// ✅ 테스트 코드
const input1 = "study";
const input2 = "good";

console.log('🧑 내 답1:', mySolution(input1));
console.log('🧑 내 답2:', mySolution(input2));
console.log('👨‍🏫 선생님 답1:', teacherSolution(input1));
console.log('👨‍🏫 선생님 답2:', teacherSolution(input2));
