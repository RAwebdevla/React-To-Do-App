import React, { Component } from 'react'

class TodoBanner extends Component {
    render = () =>
    <h4 className="bg-primary text-white text-center p-2">{this.props.name}'s To Do List <br/>{this.props.tasks.filter(i=>!i.done).length} tasks to do </h4>
}

export default TodoBanner;