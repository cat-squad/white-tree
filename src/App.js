import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import firebase, { auth, GoogleAuthProvider } from './firebase.js';

import { defaultCharacterShape } from './data';
import Layout from './Layout';

class WhiteTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: { ...defaultCharacterShape },
      user: null,
      loaded: false,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState(() => ({ user, loaded: true }));
      }
    });
  }

  handleSignOut = () => {
    auth.signOut().then(() => {
      this.setState(() => ({
        user: null,
      }));
    });
  };

  handleSignIn = () => {
    auth.signInWithPopup(GoogleAuthProvider).then(result => {
      const user = result.user;
      this.setState(() => ({
        user,
      }));
    });
  };

  handleSubmit() {
    firebase
      .database()
      .ref('users/' + this.state.user.uid)
      .set({
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        character: this.state.character,
      });
  }

  retrieveData() {
    firebase
      .database()
      .ref('users/' + this.state.user.uid)
      .once('value', function(snap) {
        console.log(snap.val());
      });
  }

  onInputChange(section, input, value) {
    const newCharacterState = { ...this.state.character };
    newCharacterState[section][input] = value;
    this.setState({
      character: newCharacterState,
    });
  }

  renderFormInput(section, input) {
    return (
      <TextField
        key={input}
        label={input}
        value={this.state.character[section][input]}
        onChange={e => this.onInputChange(section, input, e.target.value)}
        fullWidth
      />
    );
  }

  renderFormSection(section) {
    if (!this.state.character[section]) {
      return null;
    }

    const sectionKeys = Object.keys(this.state.character[section]);

    return (
      <div>{sectionKeys.map(this.renderFormInput.bind(this, section))}</div>
    );
  }

  render() {
    return (
      <Layout>
        <div className="character">
          <div className="character-background">
            {this.state.user && (
              <label>Welcome {this.state.user.displayName}</label>
            )}
            {!this.state.user ? (
              <button onClick={this.handleSignIn}> SIGN IN </button>
            ) : (
              <button onClick={this.handleSignOut}> SIGN OUT </button>
            )}

            {this.state.user && (
              <div>
                <button onClick={() => this.handleSubmit()}>
                  Submit Your Data
                </button>
                <button onClick={() => this.retrieveData()}>
                  Retrieve Data
                </button>
              </div>
            )}

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
