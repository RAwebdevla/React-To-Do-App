import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoCreator from './TodoCreator';
import TodoRow from './TodoRow';
import TodoBanner from './TodoBanner';
import VisControl from './VisControl'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Ryan',
      todoItems: [{action: 'Buy flowers', done: false},
                  {action: 'Get shoes', done: false},
                  {action: 'Drink all day', done: true},
                  {action: 'Walk the dog', done: false}
    ],
      showCompleted:true,
      // newItemText: ''
    }
  }
  changeStateData = () =>{
    this.setState({userName: this.state.userName === "Adam" ? "Bob" : "Adam"})
  }

  updateNewTextValue = (e) => {
    this.setState({newItemText:e.target.value})
  }
  createNewToDo = (task) => {
    if(!this.state.todoItems.find(i=>i.action===task)) {
      this.setState({todoItems: [...this.state.todoItems, {action:task, done:false}], newItemText:''},
      ()=>localStorage.setItem('todos', JSON.stringify(this.state)))
    }
    console.log(this.state.todoItems)
  }

  toggleTodo = (todo) => 
    this.setState({todoItems: this.state.todoItems.map(i=>i.action === todo.action ? {...i, done:!i.done} : i )},()=>localStorage.setItem('todos', JSON.stringify(this.state)))
  
    todoRows = (doneValue) => 
    this.state.todoItems.filter(i=>i.done===doneValue).map(i=>
      <TodoRow onDelete={this.onDelete} key={i.action} item={i} callback={this.toggleTodo}/>
      )
  onDelete = (item) => {
    console.log(item)
    this.setState({todoItems:this.state.todoItems.filter(i=>i!==item)}, ()=>localStorage.setItem('todos', JSON.stringify(this.state)))
  }

  componentDidMount = () => {
    let data= localStorage.getItem('todos')
    this.setState(data!=null? JSON.parse(data):{
      userName: 'Ryan',
      todoItems: [{action: 'Buy flowers', done: false},
                  {action: 'Buy new shoes', done: false},
                  {action: 'Drink few beers', done: true},
                  {action: 'Walk the dog', done: false}
    ],
      showCompleted:true,
      // newItemText: ''
    });
  }

  render = () =>
    <div className="App">
     <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>
      <div className="container-fluid">
      <TodoCreator callback={this.createNewToDo} />
        <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todoRows(false) }</tbody>
                </table>
                <div className="bg-secondary text-white text-center p-2">
                  <VisControl isChecked={this.state.showCompleted} callback={(checked)=>this.setState({showCompleted:checked})} description='Completed Tasks'/>
                </div>
                { this.state.showCompleted &&
                  <table className="table table-striped table-bordered">
                    <thead><tr><th>Description</th><th>Done</th></tr></thead>
                    <tbody> {this.todoRows(true)} </tbody>
                  </table>
                }
      </div>
    </div>
  
}

export default App;
