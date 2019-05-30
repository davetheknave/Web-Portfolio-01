import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

class About extends Page {
    render(){
        return (<div>
            <h1>About David Stearns</h1>
            <p>I am a software developer</p>
            <p>Click on the "Work" button to see what I've done</p>
            </div>);
    }
}
export default About;