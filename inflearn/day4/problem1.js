/**
 * 📌 문제 제목: 등수구하기
 * 
 * 문제 설명:
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면,
 * 각 학생의 등수를 입력된 순서대로 출력하는프로그램을 작성하세요.
 * 
 */

// 🧑 내 풀이
function mySolution(input) {
    const sortedScores = [...input].sort((a, b) => b - a);
    
    return input.map((score) => {
        return sortedScores.indexOf(score) + 1
    })
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}


// ✅ 테스트 코드
const input = [87, 89, 92, 100, 76];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
