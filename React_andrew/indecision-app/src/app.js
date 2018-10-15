// JSX - Javascript XML

var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var templateTwo = (
<div>
    <h1>Saba Turdzeladze</h1>
    <p>Age: 26</p>
    <p>Location: Tbilisi</p>
</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);