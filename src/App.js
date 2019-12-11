import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      title: '...',
      inputValue: ''
    }
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(e) {
    this.setState({
      inputValue: e.target.value,
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              {this.state.title}
            </li>
          </ol>
        </nav>

        <span htmlFor='title'> Get me a title</span>
        <input
          name='title'
          className='form-control'
          value={this.state.inputValue}
          onChange={this.changeValue}
        />

      </div>
    );
  }
}

export default App;
