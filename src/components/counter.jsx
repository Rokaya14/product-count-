import React, { Component } from 'react';

class Counter extends Component {



  render() {
    return (
      <div>
        <span className="name badge " >{this.props.counter.name}</span>
        <span className={this.badgeColor()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm ml-3"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

      </div>
    );
  }


  formatCount() { // class methode
    const { value } = this.props.counter
    return value === 0 ? "zero" : value
  }

  badgeColor() {
    let classes = "number badge badge-";

    return classes += this.props.counter.value === 0 ? "warning" : "info"
  }
}

export default Counter;
