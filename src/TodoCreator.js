import React, { Component } from 'react'

class TodoCreator extends Component {
constructor(props){
    super(props);
    this.state={newItemText:''}
}

updateNewTextValue=(e)=>{  
    this.setState({newItemText:e.target.value});
}

createNewToDo=()=>{
    this.props.callback(this.state.newItemText)
    this.setState({newItemText:''})
}



   render = () => 
   <div className="my-1">
   <input 
   className="form-control"
   value={this.state.newItemText}
   onChange={this.updateNewTextValue}/>
   <button className="btn btn-primary mt-2"
   onClick={this.createNewToDo}>
     Add Task
   </button>
 </div>
}

export default TodoCreator;