import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navBar'
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: 'Orange' },
      { id: 2, value: 0, name: 'Apple' },
      { id: 3, value: 0, name: 'cucumber' },
      { id: 4, value: 0, name: 'Tomatoes' }
    ]
  }
  handelDelete = (id) => {
    let counters = this.state.counters.filter(c => c.id !== id)
    this.setState({ counters });
  }
  handelReset = () => {

    let counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }
  handelIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
  }

  render() {
    console.log(this.state.counters);
    return (
      <React.Fragment >
        <NavBar
          counters={this.state.counters} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handelDelete}
          onIncrement={this.handelIncrement}
          onReset={this.handelReset}
        />
      </React.Fragment>

    );
  }
}
export default App;
