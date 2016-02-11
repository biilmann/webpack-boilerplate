import React from 'react';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  render() {
    return <h2>Hello {this.props.name}, This has been visible for {this.state.secondsElapsed} seconds</h2>;
  }
}
