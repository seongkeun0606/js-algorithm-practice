/**
 * 📌 문제 제목: 제곱수 판별하기
 * 🐶 난이도: level 0
 * 
 * 정수 리스트 num_list가 주어질 때, 
 * 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 
 * 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const beforeLast = num_list[num_list.length - 2];
    
    if(last > beforeLast) {
        num_list.push(last - beforeLast);
    } else {
        num_list.push(last * 2);
    }
    
    return num_list;
}