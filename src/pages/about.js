import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

class About extends Page {
    constructor(props){
        super(props);
        this.linkedin = "http://linkedin.com/in/david-stearns-70727437";
        this.github = "http://github.com/davetheknave";
    }
    render(){
        return (<div>
            <h1>About David Stearns</h1>
            <p>I am a software developer</p>
            <p>Click on the "Work" button to see what I've done</p>
            <p><a href={this.linkedin}>LinkedIn</a></p>
            <p><a href={this.github}>GitHub</a></p>
            </div>);
    }
}
export default About;