import React from 'react';
import Page from './page';
import Screenshots from '../carousel';

class DChess extends Page {
    render(){
        return (
            <div>
                <h1>D-Chess</h1>
                <p><span className="subtitle">Five Dimensional Chess</span></p>
                <h2>About</h2>
                <p>A chess game that involves moving pieces into other dimensions and into the future.</p>
                <p>It was made using the <a href="https://godotengine.org/">Godot engine.</a></p>
                <Screenshots>
                    <li className="glide__slide"><img src="DChess1.png" alt="Screenshot of a D-Chess match"/></li>
                    <li className="glide__slide"><img src="DChess2.png" alt="Screenshot of a D-Chess match"/></li>
                </Screenshots>
                <h2>How to play</h2>
                <p>Learn how the rules work <a href="https://github.com/davetheknave/D-Chess/blob/master/README.md">here.</a></p>
                <h2>Download links</h2>
                <p><a href="https://github.com/davetheknave/D-Chess/releases">Get the game here.</a></p>
                <p>This game has not been tested on MacOS, but it should work.</p>
                <h2>Source code</h2>
                <p>Available <a href="https://github.com/davetheknave/D-Chess">here.</a> </p>
            </div>
        )
    }
}

export default DChess;