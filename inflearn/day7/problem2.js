/**
 * 📌 문제 제목: K번째 큰 수
 * 
 * 문제 설명:
 * 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다 
 * 같은 숫자의 카드가 여러장 있을 수 있습니다 
 * 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 
 * 3장을 뽑을 수 있는 모든 경우를 기록합니다 
 * 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
 * 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 번째 큰 값은 22입니다.
 */

// 🧑 내 풀이
function mySolution(arr, K) {
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if(!result.includes(sum)) {
          result.push(sum);
        }
      }
    }
  }

  return result.sort((a, b) => b - a)[K - 1]
}


// 👨‍🏫 선생님 풀이
function teacherSolution(card, k) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}



// ✅ 테스트 코드
const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const K = 3;

console.log('🧑 내 답:', mySolution(arr, K));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr, K));
