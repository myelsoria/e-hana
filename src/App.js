import React, { Component } from "react";
import Todos from "./components/Todos";
import Addtodo from './components/AddTodo';
import Header from './layouts/Header';
import uuid from 'uuid';
//used class component so it can use lifecycle hooks in the future
//lifted up the state so future components can access the state
//installed uuid for random generation of key
class App extends Component {
    state = {
        todos: [
            { 
                id: 0, //added id for uniqueness and key in mapping
                title: 'Read on React',
                isCompleted: false
            },
            { 
                id: 1,
                title: 'Write some code',
                isCompleted: false
            },
            { 
                id: 2,
                title: 'Build component' ,
                isCompleted: false
            },
            { 
                id: 3,
                title: 'Publish' ,
                isCompleted: false
            },
            { 
                id: 4,
                title: 'Relax' ,
                isCompleted: false
            }
        ]
     };

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title, 
            completed: false
        } 
        this.setState({todos: [newTodo, ...this.state.todos]}); //adds on top 
    }

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map( todo => {
          if(todo.id === id){
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }) })
    }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
            <Addtodo addTodo={this.addTodo} />
            <Todos 
                todos={this.state.todos}
                markComplete={this.markComplete}  />
          </div>    
        </div>
    );
  }
}

export default App;