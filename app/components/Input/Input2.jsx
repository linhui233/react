import React from 'react'

var Input2 = React.createClass({
    getInitialState: function(){
        return {
            value: ''
        }
    },
    render: function(){
        return (
            <div>
                <input onChange={this.changeHandler} type="text"/>   {/*此处不需要bind(this).为什么?*/}
                <span>{this.state.value}</span>
            </div>
        );
    },
    changeHandler: function(e){
        this.setState({
            value: e.target.value
        })
    }
})
export default Input2