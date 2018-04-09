import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class C extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const a = ReactDOM.findDOMNode(this.a);
        $(a).on('closed.bs.alert', ()=>{
            console.log('Closed');
        })
        $(a).on('close.bs.alert', ()=>{
            console.log('Closing...');
        })
    }
    render() {
        return <div>
            <div className="alert alert-warning fade show" role="alert" ref={(a)=>this.a=a}>
                <div>This alert box has some events hooked to it.</div>
                <div><button data-dismiss="alert">Close</button></div>
            </div>
        </div>
    }
}

export default C;