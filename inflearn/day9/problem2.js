/**
 * 📌 문제 제목: 연속 부분수열1
 * 
 * 문제 설명:
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을작성하세요.
 * 만약 N=8, M=6이고 수열이 다음과 같다면, 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 */

// 🧑 내 풀이
function mySolution(arr, M) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for(let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if(sum === M) {
      answer += 1;
    } else {
      while(sum >= M) {
        sum -= arr[left++];
        if(sum ===  M) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}


// 👨‍🏫 선생님 풀이
function teacherSolution(arr, m) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}


// ✅ 테스트 코드
const arr = [1, 2, 1, 3, 1, 1, 1, 2]
const M = 6;

console.log('🧑 내 답:', mySolution(arr, M));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr, M));
