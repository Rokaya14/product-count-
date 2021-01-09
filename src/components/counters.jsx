import React, { Component } from 'react';

import Counter from './counter'

class Counters extends Component {

  render() {
    return (
      <div className="container bg-light mt-3" >
        <button
          onClick={this.props.onReset}
          className="btn btn-success btn-sm m-3"
        >
          Reset
        </button>
        {this.props.counters.map((counter) =>
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        )}

      </div>
    );
  }
}

export default Counters;