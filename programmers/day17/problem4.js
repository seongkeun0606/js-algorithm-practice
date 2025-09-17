/**
 * 📌 문제 제목: 정사각형으로 만들기
 * 🐶 난이도: level 0
 * 
 * 이차원 정수 배열 arr이 매개변수로 주어집니다. 
 * arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 
 * 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(arr) {
    const col = arr[0].length;
    const row = arr.length;
    const n = Math.max(row, col);
    
    const newArr = arr.map((row) => {
        const newRow = [...row];
        while(newRow.length < n) {
            newRow.push(0)
        }
        
        return newRow;
    })
    
    while(newArr.length < n) {
        newArr.push(Array(n).fill(0))
    }
    
    return newArr;
}