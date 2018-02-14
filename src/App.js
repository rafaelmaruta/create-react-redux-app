import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';

class App extends Component {
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const {
      clickButton,
      newValue
    } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' onChange={this.inputChange} />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickConfig.newValue
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
