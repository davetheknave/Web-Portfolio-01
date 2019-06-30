import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Resume from './pages/resume';
import Site from './pages/site';
import Moretti from './pages/moretti';
import Navigation from './navigation';
import Contact from './pages/contact';
import Window from './window/window';

const windowContents =
{home: <Home/>, about: <About/>, work: <Works/>, site: <Site/>, resume: <Resume/>, moretti: <Moretti/>, contact: <Contact/>}

export const PageContext = React.createContext();

class CurrentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: "home"};
    }
    goto = (pageID) => {
        return this.setState({page: pageID});
    }
    render(){
        return(
            <PageContext.Provider value={{page: this.state, goto: this.goto}}>
                {this.props.children}
            </PageContext.Provider>
        );
    }
}

class Star extends React.Component {
    render(){
        return (
            <div id="star">
                <Navigation />
                <span id="starText"><h1>David Stearns</h1><p>Welcome to my website</p></span>
            </div>
        );
    }
}
function Box(props) {
    return (
        <div id="box">
            <div id="window">
                <Window>
                    {windowContents[props.page]}
                </Window>
            </div>
        </div>
    );
}

class Display extends React.Component {
    render(){
        return (
            <div id="page">
                <CurrentPage>
                    <PageContext.Consumer>
                        {context => this.getPage(context.page.page)}
                    </PageContext.Consumer>
                </CurrentPage>
            </div>
        )
    }
    getPage(page){
        if(page === "home"){
            return (<Star/>);
        }
        else {
            return (<Box page={page}/>);
        }
    }
}

const element = (
    <Display/>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);
