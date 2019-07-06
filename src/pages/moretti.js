import React from 'react';
import Page from './page';
import Screenshots from '../carousel';

class Moretti extends Page {
    render(){
        return (
            <div>
                <h1>Project Moretti</h1>
                <p>Top Secret</p>
                <Screenshots/>
            </div>);
    }
}
export default Moretti;