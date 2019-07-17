import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

// A link to another page on the same site
export function PageLink(props){
    return (
            <Link className="pageLink" to={"" + props.destination}>{props.label}</Link>
        );
}

class Page extends React.Component {
    
}
export default Page;