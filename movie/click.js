// 클릭 이벤트 핸들러




// 클릭 이벤트
const click = document.querySelector(".movie-card");
click.addEventListener("click",function() {
    ID = $img.dataset["movie-id"]
    alert(`movie ID : ${ID}`);

    location.reload(true);
})

// 작동여부 확인 예시
const clickEx = document.querySelector("#searchimg");
click.addEventListener("click",function() {
    alert("정상 작동");
    location.reload(true);
})