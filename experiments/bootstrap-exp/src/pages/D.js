import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const kinds = ['button', 'input', 'a']

const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']

const outlines = ['outline on', 'outline off']

const actives = ['active off', 'active on']

const sizes = ['small', 'normal', 'large']

const Button = ({type, kind, value, outline, size, active, ...otherProps}) => {
    let buttonClassName = 'btn btn-'+(outline?'outline-':'')+type;
    if(size === 'small') {
        buttonClassName += ' btn-sm';
    } else if(size === 'large') {
        buttonClassName += ' btn-lg';
    }
    const moreProps = {}
    if(active) {
        buttonClassName += ' active';
        moreProps['aria-pressed']="true";
    }
    if(kind === 'a') {
        return <a
            href="#"
            role="button"
            className={buttonClassName}
            {...otherProps}
            {...moreProps}
        >{value}</a>
    } else if(kind == 'input') {
        return <input
            type="button"
            className={buttonClassName}
            {...otherProps}
            {...moreProps}
            value={value}
        />
    } else {
        return <button
            type="button"
            className={buttonClassName}
            {...otherProps}
            {...moreProps}
        >{value}</button>
    }
}

class D extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:types[0],
            kind:kinds[0],
            outline:false,
            size:'normal',
            active:false
        };
        this.setType = (type) => this.setState({type});
        this.setKind = (kind) => this.setState({kind});
        this.setOutline = (outline) => this.setState({outline:outline==outlines[1]})
        this.setSize = (size) => this.setState({size})
        this.setActive = (active) => this.setState({active:active==actives[1]})
    }
    render() {
        return <div className="container">
            <div>
                <div className="btn-group" role="group" aria-label="Button kind">
                    {kinds.map((kind)=><Button
                        type={this.state.type}
                        kind={this.state.kind}
                        onClick={()=>this.setKind(kind)}
                        key={kind}
                        outline={this.state.outline}
                        value={kind}
                        size={this.state.size}
                        active={this.state.active}
                    />)}
                </div>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Button type">
                    {types.map((type)=><Button
                        type={this.state.type}
                        kind={this.state.kind}
                        onClick={()=>this.setType(type)}
                        key={type}
                        outline={this.state.outline}
                        value={type}
                        size={this.state.size}
                        active={this.state.active}
                    />)}
                </div>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Button outlines">
                    {outlines.map((outline)=><Button
                        type={this.state.type}
                        kind={this.state.kind}
                        onClick={()=>this.setOutline(outline)}
                        key={outline}
                        outline={this.state.outline}
                        value={outline}
                        size={this.state.size}
                        active={this.state.active}
                    />)}
                </div>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Button sizes">
                    {sizes.map((size)=><Button
                        type={this.state.type}
                        kind={this.state.kind}
                        onClick={()=>this.setSize(size)}
                        key={size}
                        outline={this.state.outline}
                        value={size}
                        size={this.state.size}
                        active={this.state.active}
                    />)}
                </div>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Button active">
                    {actives.map((active)=><Button
                        type={this.state.type}
                        kind={this.state.kind}
                        onClick={()=>this.setActive(active)}
                        key={active}
                        outline={this.state.outline}
                        value={active}
                        size={this.state.size}
                        active={this.state.active}
                    />)}
                </div>
            </div>
        </div>
    }
}

export default D;