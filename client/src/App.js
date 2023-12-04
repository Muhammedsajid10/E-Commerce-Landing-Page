import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Controller/NAV/Navb';
import Banner from './Controller/BANNER/Banner';
import ProductItems from './Controller/PRODUCTS/ProductItems';
import ProductItemBag from './Controller/PRODUCTS/ProductItemBag';
import Cart from './Controller/CART/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Controller/CATEGORY/Category';
import Footer from './Controller/FOOTER/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navb/>
      <Banner/>
      <ProductItems/>
      <ProductItemBag/>
      <Cart/> */}

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<><Navb/><Banner/><Category/><ProductItems/><ProductItemBag/><Footer/></>} />
    <Route path='/shoeNav' element={<><Navb/><ProductItems/></>} />
    <Route path='/bagNav' element={<><Navb/><ProductItemBag/></>} />
    <Route path='/navCont' element={<><Navb/><Footer/></>} />
    
    <Route path='/cart' element={<><Navb/><Cart/></>} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
