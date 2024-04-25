const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU5YjdlMjE5NDNlZWNiZjEyMzJiMDRhYTVlYzI1OSIsInN1YiI6IjY2MjhkOTc3OTFmMGVhMDE3ZTAxMDU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kocb84g6nnDUdrQpEt7sq5BdKfrIqhJDiHucIzViMb0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));