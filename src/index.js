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
import Window from './window';

const windowContents =
{home: <Home/>, about: <About/>, work: <Works/>, site: <Site/>, resume: <Resume/>, moretti: <Moretti/>}

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
            <CurrentPage>
                    <Navigation />
                <PageContext.Consumer>
                    {(context)=>(
                        <>
                    <div id="window"><Window contents={windowContents[context.page.page]}/></div></>
                    )}
                </PageContext.Consumer>
            </CurrentPage>
        </div>
        );
    }
}

const element = (
    <div>
        <Star />
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);
