import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { DICRIMENT, INCRIMENT } from "./redux/actiontype";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count :{count} </h1>
      <button onClick={() => dispatch({ type: INCRIMENT })}>+</button>
      <button disabled={count==0} onClick={() => dispatch({ type: DICRIMENT })}>
        -
      </button>
    </>
  );
}

export default App;
