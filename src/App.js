import './App.css';
import Nav from "./nav/navbar"
import Homeslider from "./homeslider/homeslider"

// import Info from "./info/info"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";

import Login from "./login/login"
import Register from "./register/register"
import Menu from "./menu/menu"
import Footer from "./footer/footer"
import Ownpizza from "./ownpizza/ownpizza"
import LogOut from "./logout/logout"
import ForgotPassword from "./forgotpassword/forgotpassword"
import Cart from "./cart/cart"

import { ProtectedRoute } from "./protectedroute/protectedroute"


import { AppProvider } from "./CONTEXTS/contexts"

function App() {

  return (
    <>
      <AppProvider>
        <Router>
          <Switch>
            <Route path="/">
              <Nav></Nav>
              <Switch>
                <Route path="/login" exact ><Login /></Route>
                <Route path="/register" exact><Register /></Route>
                <ProtectedRoute component={Menu} path="/menu" exact />
                <ProtectedRoute component={Ownpizza} path="/ownpizza" exact />
                <ProtectedRoute component={LogOut} path="/logout" exact />
                <ProtectedRoute component={Cart} path="/cart" exact />
                <Route path="/forgotpassword" exact><ForgotPassword /></Route>
                <Homeslider />
              </Switch>
              <Footer></Footer>
              {/* <Info></Info> */}
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
