import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Text from '../components/text/Text';

const defaultCharacterShape = {
  general: {
    name: '',
    class: '',
    race: '',
    align: '',
    deity: '',
    size: '',
    space: '',
    reach: '',
  },
  physical: {
    gender: '',
    height: '',
    weight: '',
    age: '',
    hair: '',
    eyes: '',
    skin: '',
    misc: '',
  },
  points: {
    hp: '',
    gp: '',
    level: '',
    xp: '',
    notes: '',
  },
  abilities: {
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
  },
  attack: {
    melee: '',
    range: '',
    bab: '',
    cmb: '',
    conc: '',
    init: '',
  },
  defense: {
    ac: '',
    touch: '',
    cmd: '',
    fort: '',
    ref: '',
    will: '',
  },
  equipment: {
    'weapon 1': '',
    'weapon 2': '',
    'armor 1': '',
    'armor 2': '',
    'misc 1': '',
    'misc 2': '',
  },
};

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
