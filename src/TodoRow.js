import React, { Component } from 'react'

class TodoRow extends Component {
    render=()=>
    <tr>
    <td>{this.props.item.action}</td>
    <td> <input type="checkbox" checked={this.props.item.done} onChange={()=>this.props.callback(this.props.item)}/> </td>
    <td><button className="btn btn-danger"
    onClick={()=>this.props.onDelete(this.props.item)}
    >Delete</button></td>
    </tr>
}

export default TodoRow;
