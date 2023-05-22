import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';

function App({counter, increment, decrement}) {

  return (
    <div className="App">
      <h1>Increment Decrement</h1>
      <div className='container'>
        <p className='inc' onClick={increment}>+</p>
      <p className='val' >{counter}</p>
      <p className='dec' onClick={decrement}>-</p>
      </div>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)


