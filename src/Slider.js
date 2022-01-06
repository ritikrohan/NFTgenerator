import React from "react";
import Slider from "@material-ui/core/Slider";

export default class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 50,
    };
  }

  changeVolume = (event, newValue) => {
    this.setState({ currentSlide: newValue });
  };

  render() {
    return (
      <Slider value={this.state.currentSlide} onChange={this.changeVolume} />
    );
  }
}
