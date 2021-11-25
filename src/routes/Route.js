import { useSelector } from "react-redux";
import { Redirect, Route as ReactDomRoute } from "react-router-dom";

const Route = ({ isPrivated = false, component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);

  // true e true => ok
  // true e false => login
  // false e true => dashboard
  // false e false => ok
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivated === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivated ? "/login" : "/"} />
        );
      }}
    />
  );
};

export default Route;
