// 클릭 이벤트 핸들러
const moviePosters = document.querySelectorAll(".movie-poster");
moviePosters.forEach(poster => {
  poster.addEventListener("click", function(e) {
    e.preventDefault();
    const movieId = this.dataset.movieId;
    console.log("클릭된 영화 ID:", movieId);
    alert(`영화 ID: ${movieId}`);
  });
});
