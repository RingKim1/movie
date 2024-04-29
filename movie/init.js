// 웹 사이트 초기 설정(탑 영화)

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU5YjdlMjE5NDNlZWNiZjEyMzJiMDRhYTVlYzI1OSIsInN1YiI6IjY2MjhkOTc3OTFmMGVhMDE3ZTAxMDU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kocb84g6nnDUdrQpEt7sq5BdKfrIqhJDiHucIzViMb0'
    }
  };

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const movieData = response["results"];

      const moviesContainer = document.querySelector('#movie-container');

      for (let i = 0; i < movieData.length; i++) {
        const img = movieData[i]["poster_path"];
        const title = movieData[i]["original_title"];
        const overview = movieData[i]["overview"];
        const voteAverage = movieData[i]["vote_average"];
        const id = movieData[i]["id"];


        let moviePoster = document.createElement("img");
        moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${img}`);
        moviePoster.setAttribute("data-movie-id", `${id}`);
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
        movieCard.classList.add('.movie-card');

        movieInfo.appendChild(movieTitle);
        movieInfo.appendChild(movieOverview);
        movieInfo.appendChild(movieRating);
      
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieInfo);

        moviesContainer.appendChild(movieCard);
    }
    })
    .catch(err => console.error(err));