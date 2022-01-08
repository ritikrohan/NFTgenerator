import React from "react";
import Slider from "@material-ui/core/Slider";

export default class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 50,
    };
  }

  changeValue = (event, newValue) => {
    this.props.onValueChange(newValue);
    this.setState({ currentSlide: newValue });
    //console.log(`${this.props.name} is: `, this.props.value);
  };

  render() {
    return (
      <Slider value={this.state.currentSlide} onChange={this.changeValue} />
    );
  }
}
