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

        for (let i = 0; i < movieData.length; i++) {
            const image = movieData[i]["poster_path"];
            
            const movieCard = document.querySelector('.movie-card');

            const moviePoster = document.createElement("img");
            moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w400${image}`);
            moviePoster.classList.add("movie-poster");
            movieCard.appendChild(moviePoster);
        }
    })
    .catch(err => console.error(err));