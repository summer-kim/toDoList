import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/Addtodo';
import Header from './components/layout/Header'
import About from './components/pages/About'
import axios from 'axios';
import {v4 as uuid} from 'uuid';

class App extends Component {
  state = {
    todos : ''
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos_limit=10')
    .then( (res) => this.setState({todos: res.data}))
  }

  markCompleted = (id) => {
    this.setState({
      todos : this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) =>{
    this.setState({
      todos : [...this.state.todos.filter((todo)=>(todo.id !== id))]
    })
  }

  AddTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed : false
    }).then(res =>{
      res.data.id = uuid()
      this.setState({
        todos : [...this.state.todos, res.data]
      })
    })
  }
  
  render(){
    return(
      <Router>
        <div className="App">
          <div className = 'container'>
            <Header />
            <Route path ='/home'
              render = { (props) =>{
                <React.Fragment>
                  <AddTodo AddTodo = {this.AddTodo} />
                  <Todos todos = {this.state.todos} markCompleted={this.markCompleted}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              }}
            />
            <Route path='/about' component = {About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
