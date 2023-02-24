import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/Card"
import data from "./data"

function App() {
  const card = data.map(item => (
    <Card
      key={item.id}
      image={item.imageUrl}
      location={item.location}
      maps={item.googleMapsUrl}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}



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
