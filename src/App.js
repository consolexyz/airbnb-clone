import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/Data";

export default function App() {
const card = Data.map( item => <Card 
   key={item.id}
   item={item}
/>)
  return (
    <div className = "container">
      <Navbar />
      <Hero />
      <section className = "card-list">
      {card}
      </section>
    </div>
  );
  }
