/**
 * 📌 문제 제목: 두 배열 합치기
 * 
 * 문제 설명:
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요
 */

// 🧑 내 풀이
function mySolution(arr1, arr2) {
    const arr = [...arr1, ...arr2];

    return arr.sort((a, b) => a - b);
}


// 👨‍🏫 선생님 풀이
function teacherSolution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}



// ✅ 테스트 코드
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log('🧑 내 답:', mySolution(arr1, arr2));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr1, arr2));
