import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Text from '../components/text/Text';

import { defaultCharacterShape } from '../data';

class WhiteTree extends Component {
  constructor(props) {
    super(props);

    this.state = defaultCharacterShape;
  }

  onInputChange(section, input, value) {
    const newSectionState = { ...this.state[section] };
    newSectionState[input] = value;
    this.setState({
      [section]: newSectionState,
    });
  }

  renderFormInput(section, input) {
    return (
      <Text
        key={input}
        label={input}
        value={this.state[section][input]}
        onChange={(e) => this.onInputChange(section, input, e.target.value)}
      />
    );
  }

  renderFormSection(section) {
    if (!this.state[section]) {
      return null;
    }

    const sectionKeys = Object.keys(this.state[section]);

    return (
      <div>
        {sectionKeys.map(this.renderFormInput.bind(this, section))}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <img className="logo" src={logo} alt="White Tree Logo" />
        <div className="character">
          <div className="character-background">
            {this.renderFormSection('general')}
            {this.renderFormSection('physical')}
            {this.renderFormSection('points')}
          </div>
          <div className="character-stats">
            {this.renderFormSection('abilities')}
            {this.renderFormSection('attack')}
            {this.renderFormSection('defense')}
            {this.renderFormSection('equipment')}
          </div>
        </div>
      </div>
    );
  }
}

export default WhiteTree;
