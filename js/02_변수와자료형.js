// 변수 선언 : 값을 저장하기 위한 공간 생성
var number1;
var number2;
// 변수에 값 대입 : 생성된 공간에 원하는 값을 넣기
// 변수명 = 값; -> '값'을 변수에 대입
number1 = 10;
number2 = 20;


// var
// 변수 (값 변경 O). 변수명 중복 O
function varCheck(){
    var menu = "제육볶음";
    console.log("menu : ", menu);
    // 값 변경 확인 (var 키워드 X)
    menu = "라면";
    console.log("menu : ", menu);
    // 변수명 중복 확인 (var 키워드 O)
    var menu = "김밥";
    console.log("menu : ", menu);
    // var 사용의 문제점
    // 잘 사용하고 있던 변수를 실수로 없애는 경우가 발생
}

// let
// 변수 (값 변경 O). 변수명 중복 X
function letCheck(){
    // 변수 선언. "홍길동" 대입
    let name = "홍길동";
    console.log("name : ", name);
    // 값 변경
    name = "장보고";
    console.log("name : ", name);
    // 변수명 중복 X. 변수명 중복 시 오류 발생
    // 다른 이름의 변수에 저장
    let name2 = "이순신";
    console.log("name2 : ", name2);
}

// const
// Constant. 상수 (값 변경 X). 변수명 중복 X
function constCheck(){
    const nationalCode = 82;
    console.log("nationalCode : ", nationalCode);
    // 값 변경 X. 값 변경 시 오류 발생
}


// var, let, const의 범위(scope) 확인
function scopeTest1()   // 함수 선언
{   // 함수 정의
    var num1 = 100;
    if(num1 === 100)    // num1과 100이 같다면 {}블럭 수행
        {
            var num2 = 200; // var를 이용해 num2 변수를 선언
            // var는 함수 정의 시작~끝 사이에 존재하면 어디서든 사용 가능
            // 함수 종료 직전까지 사용 가능
        }
    console.log("num2 : ", num2);

    // =========================================================

    // let
    let num3 = 300;
    if(num3 === 300)
        {
            // let num4 = 400;   -> let은 {}내부에서만 사용 가능
            // {}블럭을 벗어나면 사용 불가
        }
    console.log("num4 : ", num4);
}   // 함수 정의 끝
// scopeTest1();    함수 호출


// 변수 선언 위치에 따른 범위
/* 
    1. 전역(global) 변수
        - 어디서든 사용 가능한 변수
    2. 지역(local) 변수
        - {}블럭 내부에 작성된 변수
 */

// 전역 변수 선언
// 기본적으로 {}블럭 밖에 선언
const global1 = "전역 변수1";
function scopeTest2()   // 함수 선언
{   // 함수 정의
    const fn1 = "함수 지역 변수1";
    let fn2 = "함수 지역 변수2";
    const temp = 123;   // 임시 변수

    console.log("if 실행 전 fn2 : ", fn2);
    if(temp === 123)    // if문 선언
    {   // if 정의 시작
        // {}바깥쪽 -> 안쪽 변수 사용 가능
        console.log("if 내부에서 fn2 : ", fn2);
        // {{}} 바깥쪽 -> 안쪽 변수 사용 가능
        console.log("전역 변수 global1 : ", global1);

        // {}바깥쪽 변수값을 {}내부에서 변경하면 어떤일이 발생할까?
        fn2 = "변경된 fn2";
        console.log("fn2 변경 확인 : ", fn2);
    }   // if 정의 끝

    console.log("if 끝난 이후 fn2값 : ", fn2);

    const name = "홍길동";  // 상수

    console.log("if 전 : ", name);
    if(temp === 123)
    {
        const name = "김미영";
        console.log("if 중 : ", name);  // {}바깥쪽, 안쪽 변수명이 같으면
                                        // {}안쪽이 우선순위가 높음
    }
    console.log("if 후 : ", name);

}   // 함수 정의 끝