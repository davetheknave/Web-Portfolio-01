import React from 'react';
import Page from './page';

class Site extends Page {
    render(){
        return (<div>
            <h1>About this website</h1>
            <h2>Tools used</h2>
            <ul>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="http://kenwheeler.github.io/slick/">Slick </a> (Used for image galleries)</li>
                <li><a href="https://animejs.com/">Anime.js</a> (Used for animations)</li>
            </ul>
            <h2>Source Code</h2>
            <p>Get it <a href="https://github.com/davetheknave/Website">here.</a></p>
            <h2>Privacy Policy</h2>
            <p>I don't spy on you.</p>
            </div>);
    }
}
export default Site;