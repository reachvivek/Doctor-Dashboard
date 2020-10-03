import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/dashboards.1.1.0.min.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

export default function App () {
  
  const [{ user }, dispatch] = useStateValue();

  return(
    <div>
      {!user ? (
        <Login/>
      ): (
          <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <div>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={withTracker(props => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      );
                    })}
                  />
                );
              })}
            </div>
          </Router>
      )}
  </div>
  )
}
