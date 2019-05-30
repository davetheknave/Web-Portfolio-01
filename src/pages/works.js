import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

class Works extends Page {
    render(){
        return (<div>
            <h1>Interesting things I've created</h1>
            <ul>
                <li>This website</li>
                <li>Project Moretti</li>
                <li>D-Chess</li>
            </ul>
            </div>);
    }
}
export default Works;