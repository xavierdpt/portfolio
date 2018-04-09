import React from 'react';
import $ from 'jquery';

class B extends React.Component {
    render() {
        return <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                This is Bootstrap's alert component. Use the close button to close it.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <button onClick={()=>{
                $('.alert').alert('close')
            }}>Dismiss</button>
        </div>
    }
}

export default B;