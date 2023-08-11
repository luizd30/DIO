import useCountStore from "./store/useCountStore";
import "./App.css";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <div className="card">
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
      <button onClick={increment}>Decrement</button>
    </div>
  );
}

export default App;
