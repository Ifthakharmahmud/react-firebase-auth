import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking/Booking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <>
    
     <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route path="/" exact > <Home></Home> </Route>
            <Route path="/home" exact > <Home></Home> </Route>
            <PrivateRoute path='/about'> <About></About> </PrivateRoute>
            <PrivateRoute path='/service/:serviceId' exact> <Booking></Booking> </PrivateRoute>
            <PrivateRoute path='/contact'> <Contact></Contact> </PrivateRoute>
            <Route path='/login'> <Login></Login> </Route>
            <Route path='/register'> <Register></Register> </Route>
            <Route path='*'> <NotFound></NotFound> </Route>
          </Switch>
          <Footer></Footer>
        </Router>
     </AuthProvider>
    
    </>
  );
}

export default App;
