import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import { PageContext } from '..';

function WorkEntry(props){
    return (<li><a href={props.link}>{props.name}</a></li>)
}

function PageLink(props){
    return (
        <PageContext.Consumer>
            {(context) => (
                <button className="pageLink" onClick={() => {context.goto(props.destination)}} >{props.label}</button>
            )}
        </PageContext.Consumer>
        );
}

class Works extends Page {
    render(){
        return (<div>
            <h1>Interesting things I've created</h1>
            <ul>
                <WorkEntry name="This website" link="https://github.com/davetheknave/Website" />
                <li><PageLink label="Project Moretti" destination="moretti"/></li>
                <WorkEntry name="D-Chess" link = "https://github.com/davetheknave/D-Chess" />
            </ul>
            </div>);
    }
}
export default Works;