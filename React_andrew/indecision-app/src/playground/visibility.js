class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    { this.state.visibility ? `Hide Details`: `Show details` }
                </button>
                { this.state.visibility && <p>Visibility detail</p> }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let visible = false;

// const visibility = () => {
//     visible = visible ? false : true;
//     render()
// }



// const appRoot = document.getElementById('app')
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={visibility}>
//                 {visible ? 'Hide details' : 'Show details'}
//             </button>
//             {
//                 visible ? <p>visibility test</p> : undefined
//             }
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }
// render();