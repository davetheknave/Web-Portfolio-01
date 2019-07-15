import React from 'react';
import Page from './page';
import {PageLink} from './page';

// Basically just a link
function WorkEntry(props){
    return (<a href={props.link}>{props.name}</a>)
}

class Works extends Page {
    render(){
        return (<div>
            <h1>Interesting things I've created</h1>
            <ul>
                <li><WorkEntry name="This website" link="https://github.com/davetheknave/Website" /></li>
                <li><PageLink label="Project Moretti" destination="moretti"/></li>
                <li><PageLink label="D-Chess" destination="dchess"/></li>
            </ul>
            </div>);
    }
}
export default Works;