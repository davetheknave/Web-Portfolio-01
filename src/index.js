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
                {this.button("Home", "home")}
                {this.button("About", "about")}
                {this.button("Work", "work")}
                {this.button("Resume", "resume")}
                {this.button("About this site", "site")}
            </div>
        );
    }
    button(label, pageID){
        return (<Button label={label} onClick={() => this.state.navigate(pageID)} />);
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
        <div>
            <Navigation navigate={(location) => this.changeView(location)}/>
            <Window contents={this.state.location}/>
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