/**
 * 📌 문제 제목: 왼쪽 오른쪽
 * 🐶 난이도: level 0
 * 
 * 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. 
 * str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
 * 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. "l"이나 "r"이 없다면 빈 리스트를 return합니다.
 * 
 */

function solution(str_list) {    
    const idxL = str_list.indexOf("l");
    const idxR = str_list.indexOf("r");
    
    if(idxL === -1 && idxR === -1) return [];

    if (idxL !== -1 && (idxR === -1 || idxL < idxR)) {
        return str_list.slice(0, idxL);
    }
    if (idxR !== -1 && (idxL === -1 || idxR < idxL)) {
        return str_list.slice(idxR + 1);
    }
    
    return [];
}