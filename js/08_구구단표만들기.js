/* 구구단 표 만들기 */

function createTable(){
    // 시작,종료 단 input 요소 얻어오기
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    const start = Number(startInput.value);
    const end = Number(endInput.value);
    // 테이블 머리(단 입력 영역)
    const thead = document.getElementById("thead");
    // 테이블 몸통(구구단 표 출력 영역)
    const tbody = document.getElementById("tbody");
    // 기존에 남아있던 표를 삭제하는 작업
    thead.innerHTML = "";
    tbody.innerHTML = "";   // 시작/종료태그 사이 내용을 빈칸으로 바꿈
    // 시작 또는 종료 단이 입력되지 않은 경우
    // alert("시작/종료 단을 입력해주세요");
    if( startInput.value.length == 0 || endInput.value.length == 0 ){
        alert("시작/종료 단을 입력해주세요");
        return;
    }

    // 시작 또는 종료 단에 음수가 입력된 경우
    // alert("1 이상의 수만 입력해주세요");
    if( start < 0 || end < 0 ){
        alert("1 이상의 수만 입력해주세요"); 
        return;
    }

    // 시작 단이 종료 단보다 큰 경우
    // alert("시작 단이 종료 단보다 클 수 없습니다");
    if( start > end ){
        alert("시작 단이 종료 단보다 클 수 없습니다");
    }

    /* 구구단 표 만들기 코드 작성 */
    theadresult = "<tr>";
    for(let num = start; num <= end; num++){    // </th></th> 생성
        theadresult += `<th>${num}단</th>`;
    }
    theadresult += "</tr>";
    thead.innerHTML = theadresult;      // 생성한 html코드를 HTML문서에 출력

    // 구구단 표 몸통 부분
    let tbodyresult = "<tr>"
    for(let dan = 1; dan <= 9; dan++){
        for(let num = start; num <= end; num++){
            tbodyresult += `<td>${num} x ${dan} = ${num * dan}</td>`;
        }
        tbodyresult += "</tr>"
    }
    tbody.innerHTML = tbodyresult;
}