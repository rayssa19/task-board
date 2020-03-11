import React, { Component } from 'react';
import './css/style.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="painel-todo">
        <h3>FAZER</h3>
        <TodoList items={this.state.items} />
        <div>
        <form onSubmit={this.handleSubmit}>
          <label className="justify-content-center" htmlFor="new-todo">
            O que precisa ser feito?
          </label>

          <div className="justify-content-center">
          <input 
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          </div>

          <div className="justify-content-center">
          <button>Adicionar</button>
          </div>

          <div>
          Você tem {this.state.items.length + 0} tarefas para serem concluídas
          </div>

        </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <div className="task" key={item.id}>{item.text}</div>
        ))}
      </ul>
    );
  }
}

