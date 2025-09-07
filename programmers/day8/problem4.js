/**
 * 📌 문제 제목: 합성수 찾기
 * 🐶 난이도: level 0
 * 
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(getDivisorCount(i) >= 3) {
            count++
        }
    }

    return count;
}

const getDivisorCount = (n) => {
    let count = 0;
    
    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            if(i * i === n) {
                count++
             } else {
                 count += 2;
             }
        }   
    }
    return count;
}