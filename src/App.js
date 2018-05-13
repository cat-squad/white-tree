import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import firebase, { auth, GoogleAuthProvider, db } from './firebase.js';

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

  handleSubmit(displayName) {
    const usersRef = firebase.database().ref('users');
    // const user = {
    //   uid: this.state.user.uid,
    //   user: this.state.user.displayName,
    // }
    // usersRef.push(user);
    firebase
      .database()
      .ref('users/' + this.state.user.uid)
      .set({
        uid: this.state.user.uid,
      });

    console.log(this.state);
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
              <button
                onClick={() => this.handleSubmit(this.state.user.displayName)}
              >
                Submit Your Data
              </button>
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
