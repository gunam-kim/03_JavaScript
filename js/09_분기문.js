/* break 확인 */
function check1(){
    const stopNumber = Number(prompt("1~20 사이 멈추고 싶은 숫자를 입력"));

    for(let num = 1; num <= 20; num++){
        console.log(num);
        if(num == stopNumber){
            break;      // 반복 멈춤 (for문 종료)
        }
    }
}

/* 무한 반복 멈추기 */
function check2(){
    let num = 1;
    while(true){
        console.log(num++);
        if(num === 100){
            break;
        }
    }
}

/* 무한 반복 멈추기 2 */
    // prompt에 취소가 입력될때까지 숫자를 입력받아 합계 구하기
function check3(){
    let sum = 0;
    while(true){
        const value = prompt("숫자 입력(취소 시 종료)");
        if(value === null){
            break;
        }
        sum += Number(value);
    }
    alert(`합계 : ${sum}`);
}

/* 중첩 반복문에서 break 사용 */
function check4(){
    for(let row = 1; row <= 3; row++){
        let result = "";
        for(let col = 1; col <= 5; col++){
            result += col;

            if(col === 4){
                break;
            }
        }
        console.log(result);
        console.log("=====");

        if(row === 2){
            break;
        }
    }
}

/* continue 확인하기 */
    // 1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
    // 단, 3과 5의 배수는 건너뛰기
function check5(){
    for(let num = 1; num <= 20; num++){
        if(num % 3 === 0 || num % 5 === 0){
            continue;
        }
        console.log(num);
    }
}

/* continue 확인하기 2 */
    // 1~9를 9줄 출력
    // 단, 1번줄 출력시 1 제외, 2번줄 출력시 2 제외
function check6(){
    for(let num = 1; num <= 9; num++){
        let result = "";
        for(let numb = 1; numb <= 9; numb++){
            if(numb === num){
                continue;
            }
            result += numb;
        }
        console.log(result);
    }

    // "문자열".replace("검색어", "바꿀 단어")
        // 문자열 내에 "검색어"를 찾아서 "바꿀 단어"로 변경
    /* 
    for문 하나로
        for(let num = 1; num <= 5; num++){
        let str = "123456789"
        str = str.replace(num, '');
        console.log(str);
        }
    */
}


/** UP & DOWN 게임 */
function startGame(){
    // 맞춰야되는 정답(난수) 생성
        // Math.floor(실수) : 소수점 내림 처리 (정수)
        // Math.random()    : 0~1 사이 난수 발생
    const answer = Math.floor( Math.random() * 200 + 1 );   // 1~200 사이 난수

    console.log(answer);    // 테스트 후 삭제

    // 정답 시도 횟수를 세기 위한 변수
    let count = 0;

    while(true){            // 무한 반복
        const input = prompt("1~200 사이 숫자 입력");

        // 취소를 클릭한 경우
        if(input === null){
            alert(`${count}번째에서 포기하셨습니다 (정답 : ${answer})`);
            break;
        }

        // 미입력한 경우
        if(input.length === 0){
            alert("다시 입력해주세요");
            continue;   // 다음 반복으로 넘어감
        }

        const value = Number(input);    // 입력된값 number타입 변경

        // 잘못 입력한 경우
        if(value < 1 || value > 200){
            alert("1~200 숫자만 입력");
            continue;
        }

        count++;        // 정상적으로 입력 시 카운트 증가

        // 정답 판별
        if(value === answer){
            alert(`정답!!! ${answer} / 시도 횟수 : ${count}`);
            break;
        }

        // UP&DOWN 판별 (단, 7회째면 실패)
        if(count===7){
            alert(`7회 초과로 실패! (정답 : ${answer})`);
            break;
        }
        if(value > answer){
            alert(`DOWN (현재 ${count}회)`);

        }
        if(value < answer){
            alert(`UP (현재 ${count}회)`);
        }        
    }
}