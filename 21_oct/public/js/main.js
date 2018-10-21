const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;
    let result = document.getElementById('result');
    let loader = document.querySelector('#loader');
    // showLoader(loader)

    let url = `/add?num_1=${num_1}&num_2=${num_2}`;
    /* fetch(url, {
            method: 'GET'
        })
        .then(res => {
            return res.text();

        })
        .then(data => {
            console.log(data);
            result.textContent = `Sum = ${data}`
        })
        .finally(() => {
            loader.classList.remove('loader--show');
            loader.classList.add('loader--hide');
        })
        .catch(err => {
            console.error(err);
        })*/


        // JQUERY
        // $.get(), $.post() 
        // $.ajax({
        //     url: '/add',
        //     method: 'GET',
        //     data: { num_1, num_2 }
        // }).done( data => {
        //     result.innerHTML = `Sum is ${data}`
        // } )
        // .always(() => {
        //     hideLoader(loader)
        // })

        

})

function showLoader () {
    loader.classList.add('loader--show')
    loader.classList.remove('loader--hide')
}

function hideLoader (loader){
    loader.classList.remove('loader--show')
    loader.classList.add('loader--hide')
}