/**
 * 📌 문제 제목: 멘토링
 * 
 * 문제 설명:
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다 
 * 멘토링은 멘토 도와주는 학생 와 멘티 도움을 받는 학생 가 한 짝이 되어 멘토가 멘티의수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다
 * 만약 A학생이 멘토이고 B학생이 멘티가 되는 짝이 되었다면 A학생은 M번의 수학테스트에서 모두 B 학생보다 등수가 앞서야 합니다
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지
 * 출력하는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(testResults) {
  const M = testResults.length;
  const N = testResults[0].length;
  let count = 0;

  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor === mentee) continue;

      let isValid = true;

      for (let k = 0; k < M; k++) {
        const result = testResults[k];
        const mentorRank = result.indexOf(mentor);
        const menteeRank = result.indexOf(mentee);

        if (mentorRank >= menteeRank) {
          isValid = false;
          break;
        }
      }

      if (isValid) count++;
    }
  }

  return count;
}


// 👨‍🏫 선생님 풀이
function teacherSolution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}


// ✅ 테스트 코드
const input = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
