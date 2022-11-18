import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/logged in/Home";
import Cart from "./components/cart/Cart";
import Navbar from "./components/shared/NavBar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PageNotFound from "./components/shared/pagenotfound";
import Logout from "./components/login/Logout"
import User from "./components/shared/user";
const App = () => {
  return (
    <>
      <div>
        <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
          <Navbar />
        </div>

        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/cart" component={Cart} />
            <Route path="/loggedin" exact component={Home} />
            <Route path="/" exact component={User} />
            <Redirect to="/page-not-found" />
          </Switch>
        </div>
        
      </div>
    </>
  );
};

export default App;
