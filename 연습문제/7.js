const addBtn = document.querySelector("#addBtn");
const btnContainer = document.querySelector(".btn-container");
const brdContainer = document.querySelector(".brd-container");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");

let count = 0;

btnContainer.classList.add("hidden");

addBtn.addEventListener("click", () => {
    // 생성버튼 제거
    addBtn.classList.add("hidden");
    if (btnContainer.classList.contains("hidden")) {
        btnContainer.classList.toggle("hidden");
        addBtn.classList.add("hidden");
    }

    // brd-container에 45개 숫자 출력
    for (let i = 1; i <= 45; i++) {
        const div = document.createElement("div");
        div.className = "box";      // 클래스 추가
        div.append(i);
        brdContainer.append(div);

        // 45개 중 숫자 선택할 때 (Max 6)
        div.addEventListener("click", () => {
            if (count >= 6 && !div.classList.contains("checked")) {
                alert("6개만 선택 가능합니다.");
                return;
            }
            div.classList.toggle("checked");
            if (div.classList.contains("checked")) {
                count++;
            }
            else {
                count--;
            }
            console.log(count);
        });
    }
});



// 랜덤선택 눌렀을 때
randomBtn.addEventListener("click", () => {
    
    // 난수 생성 전에 .checked 모두 찾아서 클래스 지우기
    document.querySelectorAll(".checked").forEach(item => {
        item.classList.remove("checked");
    });

    const boxes = document.querySelectorAll(".brd-container > .box");

    const arr = []; // 1~45 사이 난수 * 6
    for (let i = 0; i < 6; i++) {

        // 1~45 사이 난수 발생
        const num = Math.floor(Math.random() * 45 + 1);

        // 만약에 난수 num이 이미 배열에 존재하는 경우
        if (arr.includes(num)) {
            i--; // index를 뒤로 갔다, 앞으로 오게함 == 제자리 유지
            continue; // 다음 반복으로 넘어감
        }

        // 중복되지 않는 난수인 경우 배열에 추가
        arr[i] = num;
    }

    // 이 난수가 box안의 숫자랑 같으면 그 box를 checked로 변환
    for(let num of arr){
        boxes[num - 1].classList.add("checked");
    }
});

// 초기화 눌렀을 때
resetBtn.addEventListener("click", () => {
    reset();
});
function reset() {
    const box = document.querySelectorAll(".brd-container > .box");
    box.forEach(item => {
        item.classList.remove("checked");
    });

    count = 0;   
}