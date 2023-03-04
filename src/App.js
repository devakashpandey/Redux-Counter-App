import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state);

  return (
    <>
      <div className="counter">
        <h1>COUNTER WITH REDUX - createStore()</h1>
        <br />
        <button
          className="btn"
          onClick={(e) => dispatch({ type: "INCREMENT" })}
        >
          INCREMENT +
        </button>
        <br />
        <h4 className="number">{count}</h4> <br />
        <button
          className="btn"
          onClick={(e) => dispatch({ type: "DECREMENT" })}
        >
          DECREMENT -
        </button>
      </div>
    </>
  );
}

export default App;
