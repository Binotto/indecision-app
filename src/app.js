console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subtitle: 'Put you life in the hands of a computer.',
    options: []
};

const onFormSubmit = (e) => {
    //Prevents full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render()
}

const render = () => {
    //JSX - Javascript XML
    const template =( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are you options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All Options</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>);
        
        ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();





