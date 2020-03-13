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
        {this.state.items.map((item, index) => (
          
        <div key={item.id} className="grid-task">
          <TodoList items={this.state.items} itemTxt={item.text}/>
            <div className="remove">
              <button onClick={() => this.remove(index)} index={index} className="btn-remove">x</button>
            </div>
        </div>
        ))}
        
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
          <button className="btn-black">ADICIONAR</button>
          </div>

          <div>
            <p className="text">
              Você tem {this.state.items.length + 0} tarefas para serem concluídas
            </p>
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
      text:''
    }));
  }

  remove(e){
    console.log(e);
    this.setState(state => ({
      items: state.items.splice(e, 0),
      text:''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
        <ul>
          <div className="task">{this.props.itemTxt}</div>
        </ul>
    );
  }
}