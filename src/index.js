import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Resume from './pages/resume';
import Site from './pages/site';


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {label: props.label, onClick : props.onClick};
    }
    render (){
        return (
            <div>
                <button onClick={this.state.onClick}>{this.state.label}</button>
            </div>
        )
    }
}

const windowContents =
{home: <Home/>, about: <About/>, work: <Works/>, site: <Site/>, resume: <Resume/>}

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            window: props.window,
            navigate: props.navigate,
        };
    }
    render (){
        return (
            <div>
                {this.button("Home", "home", "charmT")}
                {this.button("About", "about", "charmL1")}
                {this.button("Work", "work", "charmR1")}
                {this.button("Resume", "resume", "charmL2")}
                {this.button("About this site", "site", "charmR2")}
            </div>
        );
    }
    button(label, pageID, charm){
        return (<div id={charm} class="charm"><Button label={label} onClick={() => this.state.navigate(pageID)}/></div>);
    }
}

function Window(props){
    return props.contents;
}

class Star extends React.Component {
    constructor(props){
        super(props);
        this.state = ({location:"home"})
    }
    changeView(newLocation){
        this.setState({location: windowContents[newLocation]});
        //this.getText("i");
    }
    render(){
        //alert(this.getText("hi"));
        
        return (
        <div id="star">
            <Navigation navigate={(location) => this.changeView(location)}/>
            <div id="window"><Window contents={this.state.location}/></div>
        </div>
        );
    }
    getText(filename){
        fetch("about.txt")
        .then(r => r.text())
        .then(data => {
            this.setState({location:data})
        });
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