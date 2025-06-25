/**
 * 📌 문제 제목: 대문자 찾기
 * 
 * 문제 설명: 
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 
 * 몇 개 있는지 알아내는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(input) {
    let count = 0;

    for(let char of input) {
      const code = char.charCodeAt();
      if(code >= 65 && code <= 90) {
        count++;
      }
    }

    return count;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

// ✅ 테스트 코드
const input = "KoreaTimeGood";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
