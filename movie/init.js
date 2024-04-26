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

      const movieCard = document.querySelector('.movie-card');

        for (let i = 0; i < movieData.length; i++) {
            const img = movieData[i]["poster_path"];
            const title1 = movieData[i]["title"];
            const overview = movieData[i]["overview"];
            const voteAverage = movieData[i]["vote_average"];            

            const moviePoster = document.createElement("img");
            moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${img}`);
            moviePoster.classList.add("movie-poster");
            movieCard.appendChild(moviePoster);
        }
    })
    .catch(err => console.error(err));