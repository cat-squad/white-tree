import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import firebase, { auth, provider } from './firebase.js';

import { defaultCharacterShape } from './data';
import Layout from './Layout';

class WhiteTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultCharacterShape,
      user: null,
    };
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
      <TextField
        key={input}
        label={input}
        value={this.state[section][input]}
        onChange={e => this.onInputChange(section, input, e.target.value)}
        fullWidth
      />
    );
  }

  renderFormSection(section) {
    if (!this.state[section]) {
      return null;
    }

    const sectionKeys = Object.keys(this.state[section]);

    return (
      <div>{sectionKeys.map(this.renderFormInput.bind(this, section))}</div>
    );
  }

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default WhiteTree;
