import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

function WorkEntry(props){
    return (<li><a href={props.link}>{props.name}</a></li>)
}

class Works extends Page {
    render(){
        return (<div>
            <h1>Interesting things I've created</h1>
            <ul>
                <WorkEntry name="This website" link="https://github.com/davetheknave/Website" />
                <WorkEntry name="Project Moretti" />
                <WorkEntry name="D-Chess" link = "https://github.com/davetheknave/D-Chess" />
            </ul>
            </div>);
    }
}
export default Works;