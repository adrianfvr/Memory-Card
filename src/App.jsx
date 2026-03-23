import { GameHeader } from "./components/GameHeader";

function App() {
  return (
    <div className="app">
      <GameHeader score={3} moves={2} />
    </div>
  );
}

export default App;
