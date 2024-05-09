// 웹 사이트 초기 설정(탑 영화)
import { Token } from "./config";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${Token}`
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const movieData = response["results"];

    const moviesContainer = document.querySelector('#movie-container');
    const recommend = document.querySelector('#recommend');

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
            Authorization: `Bearer ${Token}`
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
  }
  )
  .catch(err => console.error(err));