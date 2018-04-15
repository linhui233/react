import React from 'react'

class InputList extends React.Component{
   
    render(){
        const data = this.props.todos;
        console.log(this.props);
        return (
            <ul>
                {data.map((item,i) => {
                    return <li key={i} onClick={this.removeList.bind(this,item.id)}>{item.text}</li>
                })}
            </ul>
        );
        
    }
    removeList(id){
        this.props.deleteBtn(id);
    }
}

export default InputList