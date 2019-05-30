import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

class Resume extends Page {
    render(){
        return (<div>
            <h1>Resume</h1>
            <p><a href="https://google.com">Click here</a> to access my resume</p>
            </div>);
    }
}
export default Resume;