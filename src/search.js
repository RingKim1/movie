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
            const movieData = response["results"];

            const moviesContainer = document.querySelector('#movie-container');
            const movieCard = document.querySelector('.movie-card');
            const recommend = document.querySelector('#recommend');

            if (movieData.length > 0) {
                moviesContainer.innerHTML = '';

                movieData.forEach(element => {
                    const img = element["poster_path"];
                    const title = element["original_title"];
                    const overview = element["overview"];
                    const voteAverage = element["vote_average"];
                    const id = element["id"];


                    let moviePoster = document.createElement("img");
                    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${img}`);
                    moviePoster.classList.add("movie-poster")

                    const movieInfo = document.createElement('div');
                    movieInfo.classList.add('movie-info');

                    const movieTitle = document.createElement('h3');
                    movieTitle.classList.add('movie-title');
                    movieTitle.textContent = title;

                    const movieOverview = document.createElement('p');
                    movieOverview.classList.add('movie-overview');
                    movieOverview.textContent = overview;

                    const movieRating = document.createElement('p');
                    movieRating.classList.add('movie-rating');
                    movieRating.textContent = `평점: ${voteAverage}`;

                    const movieCard = document.createElement('div');
                    movieCard.setAttribute("data-movie-id", `${id}`);
                    movieCard.classList.add('.movie-card');

                    movieInfo.appendChild(movieTitle);
                    movieInfo.appendChild(movieOverview);
                    movieInfo.appendChild(movieRating);

                    movieCard.appendChild(moviePoster);
                    movieCard.appendChild(movieInfo);

                    moviesContainer.appendChild(movieCard);

                    // 클릭 이벤트
                    movieCard.addEventListener("click", function () {
                        // const ID = movieCard.getAttribute("data-movie-id");
                        const ID = movieCard.dataset["movieId"]
                        alert(`movie ID : ${ID}`)
                        console.log(movieCard);
                        recommend.innerHTML = '';

                        // 추천 목록 확인
                        const options = {
                            method: 'GET',
                            headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU5YjdlMjE5NDNlZWNiZjEyMzJiMDRhYTVlYzI1OSIsInN1YiI6IjY2MjhkOTc3OTFmMGVhMDE3ZTAxMDU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kocb84g6nnDUdrQpEt7sq5BdKfrIqhJDiHucIzViMb0'
                            }
                        };

                        fetch(`https://api.themoviedb.org/3/movie/${ID}/similar?language=en-US&page=1`, options)
                            .then(response2 => response2.json())
                            .then(response2 => {
                                console.log(response2);
                                const movieData2 = response2["results"];

                                const recommend = document.querySelector('#recommend');

                                movieData2.forEach(element => {
                                    const img = element["poster_path"];
                                    const title = element["original_title"];
                                    const overview = element["overview"];
                                    const voteAverage = element["vote_average"];
                                    const id = element["id"];


                                    let moviePoster = document.createElement("img");
                                    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${img}`);
                                    moviePoster.classList.add("movie-poster")

                                    const movieInfo = document.createElement('div');
                                    movieInfo.classList.add('movie-info');

                                    const movieTitle = document.createElement('h3');
                                    movieTitle.classList.add('movie-title');
                                    movieTitle.textContent = title;

                                    const movieOverview = document.createElement('p');
                                    movieOverview.classList.add('movie-overview');
                                    movieOverview.textContent = overview;

                                    const movieRating = document.createElement('p');
                                    movieRating.classList.add('movie-rating');
                                    movieRating.textContent = `평점: ${voteAverage}`;

                                    const movieCard = document.createElement('div');
                                    movieCard.setAttribute("data-movie-id", `${id}`);
                                    movieCard.classList.add('.movie-card');

                                    movieInfo.appendChild(movieTitle);
                                    movieInfo.appendChild(movieOverview);
                                    movieInfo.appendChild(movieRating);

                                    movieCard.appendChild(moviePoster);
                                    movieCard.appendChild(movieInfo);

                                    recommend.appendChild(movieCard);

                                    // 클릭 이벤트
                                    movieCard.addEventListener("click", function () {
                                        // const ID = movieCard.getAttribute("data-movie-id");
                                        const ID = movieCard.dataset["movieId"]
                                        alert(`movie ID : ${ID}`)
                                        console.log(movieCard);
                                    });
                                })
                            }
                            )
                            .catch(err => console.error(err));
                    });


                })
            } else {
                alert(`"${val}" 검색 결과가 없습니다.`)
            }

        })
        .catch(err => console.error(err));
}

// 검색 이벤트
const searchInput = document.querySelector("#search-form");
const search = document.querySelector("#search")

searchInput.addEventListener("submit", function (e) {
    e.preventDefault();
    const val = search.value;
    console.log(`"${val}" 검색`);
    showMovieList(val);
})