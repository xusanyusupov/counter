import React, { useContext } from "react";
import { CounterProvider, CounterContext } from "./components/Counter";
import "./App.css"

const CounterApp = () => {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <div className="counter__wrapper">
      <h2>Counter {counter}</h2>
     <div>
      <button disabled={counter <= 0} onClick={decrement} className="dec">
        Decrement
      </button>
     <button onClick={increment} className="inc">
        Increment
      </button>
     </div>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <CounterApp />
    </CounterProvider>
  );
};

export default App;
