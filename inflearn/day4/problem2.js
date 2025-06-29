/**
 * 📌 문제 제목: 격자판 최대합
 * 
 * 문제 설명:
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다
 * 
 */

// 🧑 내 풀이
function mySolution(input) {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1 = 0, sum2 = 0;
    const len = input.length;
    
    for(let i = 0; i < len; i++) {
      sum1 = 0;
      sum2 = 0;

      for(let j = 0; j < len; j++) {
        sum1 += input[i][j];
        sum2 += input[j][i];
      }
      answer = Math.max(answer, sum1, sum2);
    } 
    sum1 = 0;
    sum2 = 0;
    for(let i = 0; i < len; i++) {
      sum1 += input[i][i];
      sum2 += input[i][len - i - 1];
    }

    answer = Math.max(answer, sum1, sum2);
    return answer;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0, sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}


// ✅ 테스트 코드
const arr = [
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log('🧑 내 답:', mySolution(arr));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr));
