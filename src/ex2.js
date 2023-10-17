// 1. prompt 시간, 분 입력
// 2. 입력받은 시간이 분으로 한산 45분을 빼기
// 3. 만약 45분을 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더하기
// 4. 계산된 분은 다시 시간과 분으로 환선 해서 document.write ()로 출력 시, 탬플릿 문자열 사용
let hour = Number(prompt("시간 입력",""));
let min = Number(prompt("분 입력"), "");

let resultHour = parseInt(((hour * 60) + min - 45) / 60);
let resultmin = parseInt(((hour * 60) + min - 45) % 60);

if (resultmin < 0){
    resultHour += 24;
    resultmin += 60;
}

document.write(`입력받은 값 ${hour}시 ${min}분 설정된 상근이 알람 ${resultHour}시 ${resultmin}분`);