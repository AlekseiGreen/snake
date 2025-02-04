import { useState } from 'react';
import Board from "./components/Board";




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Крестики нолики на React</h1>
      <Board></Board>
    </div>
  )
}

export default App;
