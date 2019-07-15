import React from 'react';
import Page from './page';
import Screenshots from '../carousel';

class Moretti extends Page {
    render(){
        return (
            <div>
                <h1>Project Moretti</h1>
                <p>Top Secret</p>
                <Screenshots>
                    <li className="glide__slide">Screenshot 1</li>
                    <li className="glide__slide">Screenshot 2</li>
                </Screenshots>
            </div>);
    }
}
export default Moretti;