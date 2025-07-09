/**
 * 📌 문제 제목: 공통원소 구하기
 * 
 * 문제 설명:
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.
 */

// 🧑 내 풀이
function mySolution(arr1, arr2) {
  const filteredArr = arr1.filter((el, ) => arr2.includes(el));
  return filteredArr.sort((a, b) => a - b);
}
function mySolution1(arr1, arr2) {
  const answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let point1 = 0;
  let point2 = 0;
  
  while(point1 < arr1.length && point2 < arr2.length) {
    if(arr1[point1] == arr2[point2]) {
      answer.push(arr1[point1++]);
      point2++;
    } else if (arr1[point1] < arr2[point2]) {
      point1++;
    } else {
      point2++;
    }
  }
  return answer;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}


// ✅ 테스트 코드
const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log('🧑 내 답1:', mySolution(arr1, arr2));
console.log('🧑 내 답2:', mySolution1(arr1, arr2));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr1, arr2));
