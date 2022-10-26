
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-bootstrap';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
     
      <Route path="/" element={
         <RequireAuth>
            <Home></Home>
         </RequireAuth>
      } ></Route>
      
      <Route path="/home" element={
        <RequireAuth>
          <Home></Home>
        </RequireAuth>
      } ></Route>

      <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} ></Route>
      <Route path="/about" element={<About></About>} ></Route>
      <Route path="/login" element={<Login></Login>} ></Route>
      <Route path="/register" element={<Register></Register>} ></Route>

      <Route path="/checkout/:serviceId" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      } ></Route>

       {/* <Route path="/addservice" element={<AddService></AddService>} ></Route> */}

      <Route path="/addservice" element={
        <RequireAuth>
          <AddService></AddService>
        </RequireAuth>
      } ></Route>

            <Route path="/manageservices" element={
        <RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>
      } ></Route>

            <Route path="/orders" element={
        <RequireAuth>
          <Order></Order>
        </RequireAuth>
      } ></Route>

      <Route path="*" element={<NotFound></NotFound>} ></Route>
    </Routes>

    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
