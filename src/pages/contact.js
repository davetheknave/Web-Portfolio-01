import React from 'react';
import Page from './page';

class Contact extends Page {
    constructor(props){
        super(props);
        this.linkedin = "http://linkedin.com/in/david-stearns-70727437";
        this.github = "http://github.com/davetheknave";
    }
    render(){
        return (<div>
            <h1>How to reach me</h1>
            <p><a href={this.linkedin}>LinkedIn</a></p>
            <p><a href={this.github}>GitHub</a></p>
            <p>dave.j.stearns at gmail.com</p>
            </div>);
    }
}
export default Contact;