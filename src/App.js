import React, { Component } from 'react';
import Lists from './components/lists';

class App extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/lists')
    .then(res => res.json())
    .then((data) => {
      this.setState({ lists: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Lists lists={this.state.lists} />
    );
  }
}

export default App;
