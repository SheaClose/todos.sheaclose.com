import React, { Component } from "react";
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
    this.setState({
      todos: [...todos, userInput],
      userInput: ""
    });
  };

  render() {
    let todos = this.state.todos.map((todo, i) => <div key={i}>{todo}</div>);
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
