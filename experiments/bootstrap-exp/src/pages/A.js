import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'

const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info','light', 'dark'];

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            current:0
        };
        this.handleClick = () => {
            this.setState({current:(this.state.current+1)%types.length})
        }
    }
    render() {
        return <div className="container">
            <div
                className={'alert alert-'+types[this.state.current]}
                role="alert"
                style={{cursor:'pointer'}}
                onClick={this.handleClick}
            >
                <h4 className="alert-heading">Example</h4>
                <p>This is Bootstrap's {types[this.state.current]} <a className="alert-link" href="https://getbootstrap.com/docs/4.0/components/alerts/">&quot;alert&quot;</a> component.</p>
                <hr/>
                <p>It is displayed in a container.</p>
            </div>
        </div>;
    }
}

export default A;


