import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';


class OctaveControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = event => {
    this.props.returnOctave(event.target.value);
  };

  render() {
    const octaves = ['1', '2', '3', '4', '5', '6', '7', '8'];
    return (
      <div>
        {octaves.map((value, index) => (
          <Radio
            className="octave-radio-button"
            checked={this.props.octave === value}
            onChange={this.handleChange}
            value={value}
            name='radio-button-octave'
            aria-label={value}
          />
        ))}
      </div>
    )
  }
}

export default OctaveControl;