import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/Card"
import data from "./data"

function App() {
  const card = data.map(item => (
    <Card
      key={item.id}
      item={item}
    />
  ))

  return (
    <div className="App">
      <Navbar />
      {card}
    </div>
  );
}

export default App;
