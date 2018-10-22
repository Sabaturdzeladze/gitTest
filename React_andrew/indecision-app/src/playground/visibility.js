let visible = false;

const visibility = () => {
    visible = visible ? false : true;
    render()
}



const appRoot = document.getElementById('app')
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibility}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {
                visible ? <p>visibility test</p> : undefined
            }
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}
render();