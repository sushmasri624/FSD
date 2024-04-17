import React, { Component } from "react";

class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: 'black',
      fontSize: '10px',
      fontStyle: 'normal',
      textDecoration: 'none',
    };
    this.watermarkStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: '-1',  // Corrected from zindex to zIndex
      opacity: '0.3', // Corrected from 8.3 to 0.3
      fontFamily: 'Arial, sans-serif',
      fontSize: '50px',
      fontStyle: 'normal', // Corrected from Normal to normal
      color: 'gray',
    };
  }

  handleColorChange = (event) => {
    this.setState({ textColor: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ fontSize: event.target.value + 'px' }); // Corrected from event.terget to event.target
  };

  handleStyleChange = (event) => {
    this.setState({ fontStyle: event.target.value }); // Corrected from event.terget to event.target
  };

  handleDecorationChange = (event) => {
    this.setState({ textDecoration: event.target.value }); // Corrected from event.terget to event.target
  };

  render() {
    const { textColor, fontSize, fontStyle, textDecoration } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div style={this.watermarkStyle}>PRASANNA</div>
        <label htmlFor="colorPicker">Select Text Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={textColor}
          onChange={this.handleColorChange}
        />
        <label htmlFor="fontStyle">Select Font Style</label>
        <select
          id="fontStyle"
          value={fontStyle}
          onChange={this.handleStyleChange}
        >
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
        </select>

        <label htmlFor="textDecoration">Select Text Decoration</label>
        <select
          id="textDecoration"
          value={textDecoration}
          onChange={this.handleDecorationChange}
        >
          <option value="none">None</option>
          <option value="underline">Underline</option>
          <option value="overline">Overline</option>
          <option value="line-through">Line Through</option>
        </select>

        <div
          style={{
            color: textColor,
            marginTop: '20px',
            fontFamily: 'Arial, sans-serif',
            fontSize: fontSize,
            fontStyle: fontStyle,
            textDecoration: textDecoration,
          }}
        >
          <h1>It's your choice. See the magic!</h1>
        </div>
      </div>
    );
  }
}

export default ColorChanger;
