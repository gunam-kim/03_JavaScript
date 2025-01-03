/** if 예제 - 양수인지 검사 */
function check1(){
    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 val 상수에 저장
    const val = Number(in1.value);

    // 양수가 맞는지 검사
    if(val > 0){
        alert(`${val} 은/는 양수입니다.`);    // 브라우저 알림창 띄우기
    }

    // 양수가 아닌 경우
    if(val <= 0){
        alert(`${val} 은/는 양수가 아닙니다.`);
    }
}


/** 난수 홀/짝 확인하기 */
// 난수 발생 : Math.random()   0.0 <= 난수 < 1.0
    // 1~100 사이 난수 발생하려면
    // Math.random() * 100 + 1
    // 소수점도 있으므로 내림 처리
    // Math.floor(Math.random() * 100 + 1)
function check2(){
    // 1~100 사이 난수를 발생시켜 randomNumber변수에 저장
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    // 발생된 난수가 홀수인지 검사
    if(randomNumber % 2 === 1){
        alert(`${randomNumber}은/는 [홀수] 입니다`);
    }
    // 발생된 난수가 짝수인 경우
    else{
        alert(`${randomNumber}은/는 [짝수] 입니다`);
    }
}


/** 양수,0,음수 확인하기 */
function check3(){
    const input3 = document.getElementById("input3");
    const val = Number(input3.value);
    let result; // 결과를 저장할 변수 선언 (현재 undefined)

    // 양수 판별
    if(val > 0){
        result = "양수";
    }
    // 음수 판별
    else if(val < 0){
        result = "음수";
    }
    else{
        result = "0";
    }

    // if / else if / else에 모두 result값 대입 코드 작성
    // 무조건 result에는 값이 대입되도록 되어있다

    alert(`${val}은/는 ${result}입니다`);
}


/* (실습문제) */
// 1번째 풀이
function ageCheck(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value);
    let result;

    if((age >= 0) && (age <= 13)){
        result = "어린이입니다";
    }
    else if((age > 13) && (age <= 19)){
        result = "청소년입니다";
    }
    else if((age > 19) && (age <= 120)){
        result = "성인입니다";
    }
    else{
        result = "잘못 입력하셨습니다.";
    }

    alert(`${result}`);
}
// 2번째 풀이 (더 간단하게)
function ageCheck2(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value);
    let result;

    // 잘못 입력된 경우부터
    if(age < 0 || age > 120){
        result = "잘못 입력하셨습니다.";
    } else if(age <= 13){
        result = "어린이입니다";
    } else if(age <= 19){
        result = "청소년입니다";
    } else {
        result = "성인입니다";
    }
    alert(`${result}`);
}