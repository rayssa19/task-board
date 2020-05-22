import React, { Component } from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div className="todo">
            <div className="d-flex justify-content-center">
              <h3>FAZER</h3>
            </div>
            <div>

              <form onSubmit={this.handleSubmit}>

                <label className="d-flex justify-content-center" htmlFor="new-todo">
                  O que precisa ser feito?
                </label>

                <div className="text-center">
                  <input
                      id="new-todo"
                      onChange={this.handleChange}
                      value={this.state.text}
                  />
                  <button className="btn-black">+</button>
                </div>

                <div className="text-center">

                </div>

                <div>
                  <p className="text-center">
                    Você tem {this.state.items.length + 0} tarefas para serem concluídas
                  </p>
                </div>
              </form>
            </div>
            <div className="row d-flex justify-content-center">
              {this.state.items.map((item, index) => (
                  <div key={item.id} className="">
                    <TodoList items={this.state.items} itemTxt={item.text}/>
                    <div className="remove">
                      <button onClick={() => this.handleDelete(index)} index={index} className="btn-remove">excluir nota</button>
                    </div>
                  </div>
              ))}
            </div>
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
    console.log(this.state.text);
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text:''
    }));
  }

  handleDelete = itemId => {
    const items = this.state.items.filter(item => this.state.items.indexOf(item) !== itemId);
    this.setState({ items: items });
    console.log(items);
    return;
  }
}

class TodoList extends Component {
  render() {
    return (
        <ul className="boards-sub-tasks">
          <li className="board-sub-task-wrapper">
            <div className="board-sub-task board-sub-task--high-priority">
              <div className="board-sub-task-head">
                <span className="board-sub-task-title">{this.props.itemTxt}</span>
              </div>
              <div className="board-sub-task-footer">
                <span>4 hours</span>
              </div>
            </div>
          </li>
        </ul>
    );
  }
}