import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductsContext from './Global/Products.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Header from './components/Header.js';
import CartContext from './Global/CartContext.js'
function App() {
  return (
    <div>
      <ProductsContext>
        <CartContext>
          <Router>
            <Navbar/>
            <Header/>
              <Switch>
                <Route  path="/" exact component={Product}/>
                <Route path="/cart" exact component={Cart}/>
              </Switch>
          </Router>
        </CartContext>
      </ProductsContext>
    </div>
  );
}

export default App;
