window.onload = () => {
    let moviesURL = `/api/movies`
    const moviesListElement = document.getElementById('moviesList')
    fetchData(moviesURL, render, moviesListElement);

    function render(data, element) {
        if ( data.length ) {
            const html = data.map( item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.genre}</td>
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