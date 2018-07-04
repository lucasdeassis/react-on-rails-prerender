import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { 
      controller: this.props.controller,
      action: this.props.action,
     };
  }

  updateName = (name) => {
    const a = name;
    this.setState({ name: a });
  };

  render() {
    return (
      <div>
        <h3>
          Hello!
        </h3>
        <hr />
          <label htmlFor="name">
            route params:
          </label>
          <div>controller: {this.state.controller}</div>
          <div>action: {this.state.action}</div>
      </div>
    );
  }
}
