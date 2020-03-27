import React from 'react';
import { connect } from 'react-redux'
import ButtonList from '../components/ButtonList'
import Display from '../components/Display'
import './App.css';

import { handleNumberButtonClick, handleOperatorButtonClick, getResult, getDefaultState } from '../actions.js'

const mapStateToProps = state => {
  return {
    buttonValue: state.buttonValue,
    displayValue: state.displayValue,
    operator: state.operator
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNumberButtonClick: (event) => dispatch(handleNumberButtonClick(event.target.value)),
    onOperatorButtonClick: (event) => dispatch(handleOperatorButtonClick(event.target.value)),
    getResult: () => dispatch(getResult()),
    getDefaultState: () => dispatch(getDefaultState())
  }
}

class App extends React.Component {
  render() {
    const {displayValue, onNumberButtonClick, onOperatorButtonClick, getResult, getDefaultState} = this.props
    return (
      <div className="app">
        <header>Calculator</header>
        <div className='appContainer'>
          <Display displayValue={displayValue}/>
          <ButtonList 
            onNumberButtonClick={onNumberButtonClick} 
            onOperatorButtonClick={onOperatorButtonClick} 
            getResult={getResult}
            getDefaultState={getDefaultState}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
