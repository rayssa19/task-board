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
          </div>

          <div className="text-center">
          <button className="btn-black">ADICIONAR</button>
          </div>

          <div>
            <p className="text-center">
              Você tem {this.state.items.length + 0} tarefas para serem concluídas
            </p>
          </div>
        </form>
        </div>
        {this.state.items.map((item, index) => (
          
        <div key={item.id} className="grid-task">
          <TodoList items={this.state.items} index={index} itemTxt={item.text}/>
        </div>
        ))}
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
}

class TodoList extends Component {
  handleDelete = itemId => {
    const items = this.state.items.filter(item => this.state.items.indexOf(item) !== itemId);
    this.setState({ items: items });
    console.log(items);
    return;
  }
  render() {
    return (
        <ul>
          <div className="task" onMouseMove={this.handleMouseMove}>{this.props.itemTxt}</div>

          <div className="remove">
              <button onClick={() => this.handleDelete(this.props.index)} index={this.props.index} className="btn-remove">x</button>
            </div>
        </ul>
    );
  }
}