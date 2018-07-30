import React, { Component } from "react";
import { reactLocalStorage as ls } from "reactjs-localstorage";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    userInput: ""
  };
  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  submit = e => {
    e.preventDefault();
    let { todos, userInput } = this.state;
    let newTodos = [...todos, userInput];
    this.setState({
      todos: newTodos,
      userInput: ""
    });
    ls.setObject("todos", newTodos);
  };
  deleteTodo = i => {
    let { todos } = this.state;
    let copy = todos.slice();
    copy.splice(i, 1);
    this.setState({ todos: copy });
    ls.setObject("todos", copy);
  };
  componentDidMount() {
    let todos = ls.getObject("todos");
    if (Array.isArray(todos)) {
      this.setState({ todos });
    }
  }

  render() {
    let todos = this.state.todos.map((todo, i) => (
      <div onClick={() => this.deleteTodo(i)} key={i}>
        {todo}
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <div>
          <form onSubmit={this.submit}>
            <input
              autoFocus
              type="text"
              name="userInput"
              onChange={this.handleChange}
              value={this.state.userInput}
            />
            {todos}
          </form>
        </div>
      </div>
    );
  }
}

export default App;
