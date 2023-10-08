import './App.css';
import Footer from './comonent/footer/footer';
import NavBar from './comonent/navbar/navbar';
import SignUp from './comonent/signup/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateComponent from './comonent/preivatecomponent';
import Login from './comonent/login/login';
import AddProduct from './comonent/addproduct/addproduct';
import ProductList from './product/product';
import UpdateProduct from './comonent/updateprduct/updateproduct';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar />
        <Routes>
          <Route element={<PrivateComponent/>}>
            {/* if the user is signed up the access will be prvided to these routes */}
          <Route path='/' element={<ProductList/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update/:id' element={<UpdateProduct/>}/>
          {/* no need to use the log out path */}
          {/* <Route path='/logout' element={<h3  className='h3'>this is logout</h3>}/> */}
          <Route path='/profile' element={<h3  className='h3'>this is profile</h3>}/>
          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>

     {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
