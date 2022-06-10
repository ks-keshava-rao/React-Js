import React,{Component} from "react";
// import './index.css'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }
  increment = () => {
    this.setState(
      {
        count : this.state.count + 1
      }
    )
  }
  decrement = () => {
    this.setState(
      {
        count : this.state.count - 1
      }
    )
  }
  render(){
    return(
    <div >
      <button onclick={this.increment}> + </button>
      <button onclick={this.decrement}> - </button>
      <h2>{this.state.count}</h2>
    </div>
    )
  }
}

export default Counter;

