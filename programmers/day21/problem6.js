/**
 * 📌 문제 제목: 0 떼기
 * 🐶 난이도: level 0
 * 
 * 정수 배열 arr와 query가 주어집니다.
 * query를 순회하면서 다음 작업을 반복합니다.
 * 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
 * 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
 * 위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(arr, query) {
    for(let i = 0; i < query.length; i++) {
        const cur = query[i];
        
        if(i % 2 === 0) {
            arr = arr.slice(0, query[i] + 1)
        } else {
            arr = arr.slice(query[i])
        }
    }
    return arr;
}