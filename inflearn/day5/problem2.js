/**
 * 📌 문제 제목: 문자열 압축
 * 문제 설명:
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는
 * 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
 * 단 반복횟수가 1인 경우 생략합니다.
 */

// 🧑 내 풀이
function mySolution(str) {
  let result = "", successive = 1;

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    const next = str[i + 1];

    if (cur === next) {
      successive++;
    } else {
      result += cur;
      if (successive > 1) {
        result += successive;
      }
      successive = 1;
    }
  }

  return result;
}


// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

// ✅ 테스트 코드
const str = "KKHSSSSSSSE";

console.log('🧑 내 답:', mySolution(str));
console.log('👨‍🏫 선생님 답:', teacherSolution(str));
