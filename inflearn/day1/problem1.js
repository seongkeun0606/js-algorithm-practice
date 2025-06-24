/**
 * 📌 문제 제목: 세 수 중 최솟값
 * 
 * 문제 설명:
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 
 * 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)
 * 
 */

// 🧑 내 풀이
function mySolution(input) {
    let min = Number.POSITIVE_INFINITY;
    if(Array.isArray(input)) {
        min = Math.min(...input);
    }
    return min;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(a, b, c) {
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;    
}

// ✅ 테스트 코드
const input = [6, 5, 11];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(6, 5, 11));
