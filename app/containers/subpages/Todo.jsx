import React from 'react';
import Input from '../../components/Input/input'
import InputList from '../../components/List/InputList'
class Todo extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            now: Date.now(),
            todos: []
        }
    }
    render() {
        return (
            <div>
                <Input commitValue={this.commitValue.bind(this)}/>
                <InputList todos={this.state.todos} deleteBtn={this.deleteBtn.bind(this)}/>
            </div>
        );
    }
    commitValue(value){
        const todos = this.state.todos;
        this.setState({
            todos: todos.concat({
                id: todos.length,
                text: value
            })
        })
        console.log(todos);
    }
    deleteBtn(id){
        this.setState({
            todos: this.state.todos.filter(function(item){
                if(item.id !== id){
                    return item;
                }
            })
        })
    }
   
}
export default Todo