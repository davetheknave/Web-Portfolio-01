import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation/navigation';
import Window from './window/window';
import {Blob as Star} from './animations/star/star';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SpiroBackground from './animations/spiro/spiro';


import About from './pages/about';
import Works from './pages/works';
import Resume from './pages/resume';
import Site from './pages/site';
import Moretti from './pages/moretti';
import Contact from './pages/contact';
import DChess from './pages/dchess';

const pages = {
    about: <About/>,
    work: <Works/>,
    site: <Site/>,
    resume: <Resume/>,
    moretti: <Moretti/>,
    contact: <Contact/>,
    dchess: <DChess/>
}

const W = ({match}) => (
    <div id="window">
        <Window>
            {pages[match.params.id]}
        </Window>
    </div>
)

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {complete:false};
    }
    render(){
        return (
            <div id="page">
                <SpiroBackground/>
                <Route exact path="/" render={()=>(
                    <div id="star">
                        <Star complete={this.state.complete} onDone={() => this.setState({complete:true})}>
                            <Navigation/>
                            <span id="starText"><h1>David Stearns</h1><p>Welcome to my website</p></span>
                        </Star>
                    </div>

                )} />
                <Route path="/:id" component={W}/>
            </div>
        )
    }
}

const element = (
    <Router>
        <Display/>
    </Router>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);
