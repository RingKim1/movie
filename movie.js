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
        console.log(response)
        for (let i = 0; i < response["results"].length; i++) {
            let image = response["results"][i]["poster_path"];

            const moviecontainer = document.querySelector('#moviecontainer');
            
            let newImg = document.createElement("img");
            newImg.setAttribute("src", `https://image.tmdb.org/t/p/w500${image}`);
            newImg.classList.add("posterImg")
            moviecontainer.appendChild(newImg);
        }
    })
    .catch(err => console.error(err));

    document.querySelector("#logo").addEventListener("click",function() {
        alert("Welcome my page");
    })

    document.querySelector("#search_input").addEventListener("keydown",function() {
        console.log("입력 중");
        alert("입력 중");
    })