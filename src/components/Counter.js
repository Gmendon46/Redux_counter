import {Component} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
 const show = useSelector(state => state.showCounter)

  const incrementHandler = () =>{
    dispatch({type: "increment"})
  }

  const decrementHandler = () =>{
    dispatch({type: 'decrement'})
  }

  const increaseHandler = () =>{
    dispatch({type: 'increase', amount:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  const resetHandler = () =>{
    dispatch({type: 'reset'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value}>{counter}</div>
      }
     
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset</button>
    </main>
  );
};

export default Counter

// class Counter extends Component {
  
//   incrementtHandler(){
//     this.props.increment
//   }

//   decrementHandler(){
//     this.props.decrement
//   }
  
//   render(){
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={incrementHandler.bind(this)}>Increment</button>
//         <button onClick={decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter : state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// } 

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
