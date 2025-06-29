/**
 * 📌 문제 제목: 봉우리
 * 
 * 문제 설명:
 * 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 
 * 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 
 * 봉우리 지역이 몇 개있는 지 알아내는 프로그램을 작성하세요.
 * 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
 * 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다
 */

// 🧑 내 풀이
function mySolution(input) {
  let count = 0;
  
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[0].length; j++) {
      const target = input[i][j];
      const left = j - 1 >= 0 ? input[i][j - 1] : 0;
      const right = j + 1 < input[0].length ? input[i][j + 1] : 0;
      const top = i - 1 >= 0 ? input[i - 1][j] : 0;
      const bottom = i + 1 < input.length ? input[i + 1][j] : 0;

      if(target === Math.max(target, left, right, top, bottom)) {
        count++
      }      
    }
  }
    return count;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}


// ✅ 테스트 코드
const arr=[
  [5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];

console.log('🧑 내 답:', mySolution(arr));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr));
