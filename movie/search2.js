// 검색 시 영화 이미지, 정보를 보여주는 핸들러
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
            const movieCard = document.querySelector('.movie-card');
            movieCard.innerHTML = '';

            for (let i = 0; i < response["results"].length; i++) {
                const img = response["results"][i]["poster_path"];
                const title1 = response["results"][i]["title"];
                const overview = response["results"][i]["overview"];
                const voteAverage = response["results"][i]["vote_average"];

                let moviePoster = document.createElement("img");
                moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w500${img}`);
                moviePoster.classList.add("movie-poster")

                const movieInfo = document.createElement('div');
                movieInfo.classList.add('movie-info');

                const movieTitle = document.createElement('h3');
                movieTitle.classList.add('movie-title');
                movieTitle.textContent = title1;

                const movieOverview = document.createElement('p');
                movieOverview.classList.add('movie-overview');
                movieOverview.textContent = overview;

                const movieRating = document.createElement('p');
                movieRating.classList.add('movie-rating');
                movieRating.textContent = `Rating: ${voteAverage}`;

                movieInfo.appendChild(movieTitle);
                movieInfo.appendChild(movieOverview);
                movieInfo.appendChild(movieRating);
              
                movieCard.appendChild(moviePoster);
                movieCard.appendChild(movieInfo);
              
                moviesContainer.appendChild(movieCard);

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