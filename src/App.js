import React from 'react';
import './App.css';
import Appbar from './components/appBar/appBar';
import Home from './views/home/home';
import Bakeds from './views/bakeds/bakeds';
import ShoppingCart from './views/shoppingCart/shoppingCart';

function App() {
  const [itemCategory, setItemCategory] = React.useState([]);
  const [itemsAddedToCart, setAddedToCart] = React.useState([]);
  const [views, setViews] = React.useState(0)

  const toShowViews = () => {
    if (views === 0) {
      return <Home setItemCategory={setItemCategory.bind(this)} setViews={setViews.bind(this)}></Home>
    } else if (views === 1) {
      return <Bakeds itemsAddedToCart={itemsAddedToCart} setAddedToCart={setAddedToCart.bind(this)} setItemCategory={setItemCategory.bind(this)} itemCategory={itemCategory}></Bakeds>
    } else if (views === 2) {
      return <ShoppingCart itemsAddedToCart={itemsAddedToCart} setAddedToCart={setAddedToCart.bind(this)} setViews={setViews.bind(this)}></ShoppingCart>
    }
  }

  return (
    <div className="App">
      <Appbar views={views} setViews={setViews.bind(this)} numberOfItemsAddedToCart={itemsAddedToCart.length}></Appbar>
      {toShowViews()}
    </div>
  );
}

export default App;
