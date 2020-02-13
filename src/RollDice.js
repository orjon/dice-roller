import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      die1:'one',
      die2:'two',
      rolling:false
    };
    this.rollTheDice = this.rollTheDice.bind(this);
  }

  rollTheDice(){
    const numberString = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six'
    ]
    console.log('Rolling')
    this.setState({die1: numberString[(Math.floor(Math.random()*6))]})
    this.setState({die2: numberString[(Math.floor(Math.random()*6))]})
  }

  render(){
    return(
      <div className='RollDice'>
        <div className='RollDice-dice'>
          <Die value={this.state.die1}/>
          <Die value={this.state.die2}/>
        </div>

        <button onClick={this.rollTheDice}>Roll Dice</button>
      </div>
      
    )
  }
}



export default RollDice;