// 검색 시 영화를 보여주는 핸들러
function showMovieList(val) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU5YjdlMjE5NDNlZWNiZjEyMzJiMDRhYTVlYzI1OSIsInN1YiI6IjY2MjhkOTc3OTFmMGVhMDE3ZTAxMDU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kocb84g6nnDUdrQpEt7sq5BdKfrIqhJDiHucIzViMb0'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const movieData = response["results"];

            const moviesContainer = document.querySelector('.movie-container');
            const movieCard = document.querySelector('.movie-card');

            movieCard.innerHTML = '';

            for (let i = 0; i < movieData.length; i++) {
                const img = movieData[i]["poster_path"];

                const moviePoster = document.createElement("img");
                moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${img}`);
                moviePoster.classList.add("movie-poster");

                movieCard.appendChild(moviePoster);
            }
        })
        .catch(err => console.error(err));
}

// 검색 이벤트
const searchInput = document.querySelector("#search");
searchInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()


        const val = searchInput.value;
        console.log(`"${val}" 검색`);
        showMovieList(val)

    }
})