import React from 'react'

class Input extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            value: ''
        }
    }
    render(){
        return (
            <input onChange={this.changeHandler.bind(this)} onKeyUp={this.keyUpHandler.bind(this)} type="text"/>
        )
    }
    changeHandler(e){
        this.setState({
            value: e.target.value
        })
    }
    keyUpHandler(e){
        const value = this.state.value;
        if(e.keyCode===13 && value.trim()){
            this.props.commitValue(value);
        }
    }
}

export default Input