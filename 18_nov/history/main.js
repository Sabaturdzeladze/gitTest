window.onload = () => {
    let views = {
        home: {
            title: 'Index page',
            url: './views/home.html',
            content: ''
        },
        contact: {
            title: 'Contact page',
            url: './views/contact.html',
            content: ''
        },
        portfolio: {
            title: 'Portfolio page',
            url: './views/portfolio.html',
            content: ''
        },
        about_us: {
            title: 'About us page',
            url: './views/about_us.html',
            content: ''
        },
    };

    const Links = document.querySelectorAll('.menu--item');
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');

    Links.forEach( link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.attributes['href'].value;
            const viewData = views[url.split('.')[0]];
            console.log(viewData);

            fetch(`./views/${url}`)
                .then(data => data.text())
                .then(data => {
                    viewData.content = data;
                    renderContent(viewData);
                    history.pushState(viewData, viewData.title, url);
                })
        })
    } )

    function renderContent(state) {
        if ( state ) {
            contentElement.innerHTML = state.content;
        }
    }

    window.addEventListener('popstate', function(e) {
        console.log(event);
        renderContent(event);
    })
    
    renderContent(views.home);

    history.replaceState( views.home, views.home.title, '' )
}