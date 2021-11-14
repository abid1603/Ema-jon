
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Manage from './Components/Manage/Manage';
import Notfound from './Components/Notfound/Notfound';
import ProductDetailse from './Components/ProductDetailse/ProductDetailse';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/review' element={<Review/>} />
          <Route path='/Manage' element={<Manage/>} />
          <Route path='/product/:productkey' element={<ProductDetailse/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
