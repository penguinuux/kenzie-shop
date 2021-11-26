import { Switch, Route } from "react-router-dom";

// import Route from "./Route";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
