import React, { Component } from "react";
import ScrollTrigger from "react-scroll-trigger";

class SkillBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
    };

    this.onEnterViewPort = this.onEnterViewPort.bind(this);
    this.onExitViewPort = this.onExitViewPort.bind(this);
  }

  onEnterViewPort() {
    this.setState({
      percentage: this.props.percentage,
    });
  }

  onExitViewPort() {
    this.setState({
      percentage: 0,
    });
  }

  render() {
    return (
      <ScrollTrigger
        className="filler"
        style={{ width: `${this.state.percentage}%` }}
        onEnter={this.onEnterViewPort}
        onExit={this.onExitViewPort}
      ></ScrollTrigger>
    );
  }
}

export default SkillBar;
