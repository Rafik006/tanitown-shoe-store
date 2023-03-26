import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import BackgroundImgs from './components/backgroundComponent/BackgroundImgs';
import Description from './components/Description/Description';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ProductsContainer from './Pages/ProductsContainer';
import Cart from './Pages/Cart'
import ShopContextPovider from './context/ProductContext';
import Buy from './components/buy/Buy';


function App() {
  
  return (
   <ShopContextPovider> 

    <div className="App">

      <Router>
        <Description/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ProductsContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Buy' element={<Buy/>}/>

        </Routes>

        <Footer/>
      </Router>

    </div>
    </ShopContextPovider>
  );
}

export default App;
