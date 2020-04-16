import React from 'react';
import './App.css';
import Snackbar from '@material-ui/core/Snackbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Appbar from './components/appBar/appBar';
import Alert from '@material-ui/lab/Alert';
import Close from '@material-ui/icons/Close';

import Home from './views/home/home';
import Bakeds from './views/bakeds/bakeds';
import ShoppingCart from './views/shoppingCart/shoppingCart';

function App() {
  const [itemCategory, setItemCategory] = React.useState([]);
  const [itemsAddedToCart, setAddedToCart] = React.useState([]);
  const [views, setViews] = React.useState(0)
  const [openAlertConfirmBuy, setOpenAlertBuyConfirmBuy] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlertBuyConfirmBuy(false);
  };

  const toShowViews = () => {
    if (views === 0) {
      return <Home setItemCategory={setItemCategory.bind(this)} setViews={setViews.bind(this)}></Home>
    } else if (views === 1) {
      return <Bakeds itemsAddedToCart={itemsAddedToCart} setAddedToCart={setAddedToCart.bind(this)} setItemCategory={setItemCategory.bind(this)} itemCategory={itemCategory}></Bakeds>
    } else if (views === 2) {
      return <ShoppingCart itemsAddedToCart={itemsAddedToCart} setAddedToCart={setAddedToCart.bind(this)} setViews={setViews.bind(this)} setOpenAlertBuyConfirmBuy={setOpenAlertBuyConfirmBuy.bind(this)}></ShoppingCart>
    }
  }

  return (
    <div className="App">
      <Appbar views={views} setViews={setViews.bind(this)} numberOfItemsAddedToCart={itemsAddedToCart.length}></Appbar>
      {toShowViews()}

      <Snackbar open={openAlertConfirmBuy} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }>
          Gracias por confiar en nosotros. En 20min. aprox. llegara su pedido.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
