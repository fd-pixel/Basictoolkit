import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";

import { increment, decrement } from "./redux/count";

function App() {
  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increment());
  };
  const handleDecrease = () => {
    dispatch(decrement());
  };
  const handleIncrease1 = () => {
    setCount(count + 1);
  };
  const handleDecrease1 = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const reducerCount = useSelector((state) => state.count);
  return (
    <div>
      <Navbar />
      <h1>Counter</h1>
      count: {count}
      <br />
      reducer count:{reducerCount}
      <br></br>
      <button onClick={handleIncrease}>ReducerIncrease</button>
      <button onClick={handleIncrease1}>StateIncrease</button>
      <button onClick={handleDecrease}>ReducerDecrease</button>
      <button onClick={handleDecrease1}>StateDecrease</button>
      {/* <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      /> */}
    </div>
  );
}

export default App;
