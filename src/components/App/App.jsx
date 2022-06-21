import React, { useState } from "react";

import Card from "../Card/Card";

import "./App.scss";

const data = [
  {
    _id: "1d23d",
    taste: "c фуа-гра",
    portions: 10,
    gift: 1,
    weight: "0,5",
    desc: "Печень утки разварная с артишоками.",
    isSelected: false,
    availableForPurchase: 10,
  },
  {
    _id: "2242d",
    taste: "c рыбой",
    portions: 40,
    gift: 2,
    weight: "2",
    desc: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    isSelected: false,
    availableForPurchase: 20,
  },
  {
    _id: "43d3",
    taste: "с курой",
    portions: 100,
    gift: 5,
    weight: "5",
    options: "заказчик доволен",
    desc: "Филе из цыплят с трюфелями в бульоне.",
    isSelected: false,
    availableForPurchase: 0,
  },
];

function App() {
  const [cards, setCards] = useState(data);

  
  const selectItem = (id) => {
    const copyArr = [...cards];
    const current = copyArr.find((t) => t._id === id);
    current.isSelected = !current.isSelected;
    setCards(copyArr);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="cards-container">
          {cards.map((item) => (
            <Card {...item} selectItem={selectItem} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
