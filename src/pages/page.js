import React from 'react';
import {PageContext} from '../index';

// A link to another page on the same site
export function PageLink(props){
    return (
        <PageContext.Consumer>
            {(context) => (
                <button className="pageLink" onClick={() => {context.goto(props.destination)}} >{props.label}</button>
            )}
        </PageContext.Consumer>
        );
}

class Page extends React.Component {
    
}
export default Page;