/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
class NavBar extends Component {

  render() {
    let incrementedCounters = this.props.counters.filter(c => c.value > 0)
    return (

      <nav className="navbar navbar-light bg-light d-flex justify-content-start">
        <a className="navbar-brand Nav" href="#"><strong>Total Products</strong>
        </a>
        <span className="badge badge-secondary badge-pill ml-2 ">
          {incrementedCounters.length}
        </span>

      </nav>

    );
  }

}

export default NavBar;