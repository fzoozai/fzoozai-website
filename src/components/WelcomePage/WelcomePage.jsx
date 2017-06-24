import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class WelcomePage extends Component {
  render() {
    const numbers = [2, 3, 17];
    const doubled = numbers.map((number) =>
      number * 3 + " "
    );
    return (
      <div>
        <h1>Welcome to fzoozaitech.io</h1>
        <ol>
          <p>{doubled}</p>
          <p>{this.props.store.todos[3]}</p>
        </ol>
      </div>
    );
  }
};

export default WelcomePage;
