import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
// import {v4 as uuid} from "uuid";

import cardData from "../src/data.js";

import './App.css/';

function App() {
  const cards = cardData.map( data => 
    <Card 
      // key={uuid()}
      key={data.id}
      data={data}
    />
  )

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="cards-list">
                {cards}
          </section>
    </div>
  )
}

export default App;
