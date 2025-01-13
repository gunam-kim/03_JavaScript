/* Node 탐색 확인 */

const checkBtn1 = document.querySelector("#checkBtn1");

// 이벤트 : 사건,행위,행동
// 이벤트 리스너 : 이벤트 감지 시 기능을 수행
// 이벤트 핸들러 : 감지 시 수행되는 기능
checkBtn1.addEventListener("click", () => {
    const test1 = document.querySelector("#test1");     // ul
    // 요소.childNodes : 모든 자식 노드 반환(NodeList, 유사배열)
    const list = test1.childNodes;
    console.log("list : ", list);
    // 요소(태그), Text(엔터,띄어쓰기,글자), Comment(주석)

    console.log("첫번째 li 태그 : ", list[3]);

    // 요소.parentNode : 부모 노드 탐색
    // #li1의 부모 노드 탐색
    const li1 = document.querySelector("#li1");
    const parent = li1.parentNode;
    console.log("parent : ", parent);

    // 요소.firstChild : 첫번째 자식 노드 탐색
    console.log("firstChild : ", parent.firstChild);

    // 요소.lastChild : 마지막 자식 노드 탐색
    console.log("lastChild : ", parent.lastChild);

    // parent의 마지막 자식의 배경색을 pink로 변경
    parent.lastChild.style.backgroundColor = "pink";

    // 요소.previousSibling : 이전 형제 노드 탐색
    // list[5]의 이전,이전 형제 노드 탐색
    console.log(list[5].previousSibling.previousSibling);   // list[3]

    // 요소.nextSibling : 다음 형제 노드 탐색
    // list[9]의 다음,다음 형제 노드 탐색
    console.log(list[9].nextSibling.nextSibling);       // list[11]

    // <a href="#">4번</a>의 글자색 blue로 변경하기
    parent.lastChild.childNodes[1].style.color = "blue";
});



/* Element 탐색 확인 */

const checkBtn2 = document.querySelector("#checkBtn2");

checkBtn2.addEventListener("click", () => {
    // #li2
    const li2 = document.querySelector("#li2");

    // #li2의 부모 요소 선택
    const parent = li2.parentElement;
    console.log("parent : ", parent);

    // 모든 자식 요소 선택
    console.log("children : ", parent.children);

    // 첫번째 자식 요소 선택
    console.log("firstElementChild : ", parent.firstElementChild);

    // 마지막 자식 요소 선택
    console.log("lastElementChild : ", parent.lastElementChild);

    // parent의 1번 index 자식의 이전 형제 요소
    console.log(parent.children[1].previousElementSibling);

    // parent의 1번 index 자식의 다음 형제 요소
    console.log(parent.children[1].nextElementSibling);
});