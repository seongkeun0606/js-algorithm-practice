/**
 * 📌 문제 제목: 1부터 N까지 합 출력하기
 * 
 * 문제 설명: 
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * 
 */


// 🧑 내 풀이
function mySolution(input) {
    let sum = 0;
    for(let i = 1; i <= input; i++) {
      sum += i;
    }

    return sum;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}


// ✅ 테스트 코드
const input = 6;

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));