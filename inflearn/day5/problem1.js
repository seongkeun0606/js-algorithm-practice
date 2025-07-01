/**
 * 📌 문제 제목: 가장 짧은 문자거리
 * 
 * 문제 설명:
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가,
 * 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(s, t) {
    const n = s.length;
    const result = Array(n).fill(0);
    let p = 1000;

    for (let i = 0; i < n; i++) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    result[i] = p;
  }

  p = 1000;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    result[i] = Math.min(result[i], p);
  }

  return result;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

// ✅ 테스트 코드
const a = "teachermode";
const b = "e";

console.log('🧑 내 답:', mySolution(a, b));
console.log('👨‍🏫 선생님 답:', teacherSolution(a, b));
