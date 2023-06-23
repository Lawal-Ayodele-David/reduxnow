import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
//import Cart from './components/cartpage';
import Cart from './components/Cart';
//import Product from './components/addtocart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Cart />
        
        <hr />
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;