window.onload = () => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=AJAX';

    document.querySelector('button').addEventListener('click', () => {
        const input = document.querySelector('input');
        fetch(url)
            .then(data => data.json())
            .then(data => { //obj.items     array
                let filtered = data.items.filter((item) => {
                    return item.volumeInfo.title.toLowerCase().startsWith(input.value.toLowerCase());
                })

                const html = filtered.map((item) => {
                    console.log(item);
                    return `<tr>
                    <td>${item.volumeInfo.title}</td>
                    <td>${item.volumeInfo.authors[0]}</td>
                    <td>${item.volumeInfo.publisher}</td>
                    <td>${item.volumeInfo.publishedDate}</td>
                </tr>`
                }).join(' ');
                
                document.querySelector('tbody').innerHTML = html;
                input.value = '';
            })
    })
}