window.onload = () => {
    let moviesURL = `/api/movies`
    const moviesListElement = document.getElementById('moviesList');

    const addMovieBtn = document.getElementById('btnAddMovie');
    addMovieBtn.addEventListener('click', () => {
        let movie = {
            name: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            director: document.querySelector('#director').value,
            year: document.querySelector('#releaseYear').value,
        };

        addMovie(movie);
    });

    function addMovie(movie) {
        fetch(moviesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        fetchData(moviesURL, render, moviesListElement);
        alert("movie added successfully");
    };


    fetchData(moviesURL, render, moviesListElement);

    function render(data, element) {
        if ( data.length ) {
            const html = data.map( item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.director}</td>
                    <td>${item.year}</td>
                </tr>
            `).join(' ');
            element.innerHTML = html;
        }
    }
    function fetchData(url, callback, element) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',   // what information do I post
                'Accept': 'application/json'
            }
        })
        .then( data => data.json())
        .then( data => {
            // console.log('Response', data);
            callback(data, element);
        } )
        .catch(err => console.log(err))
    }
}