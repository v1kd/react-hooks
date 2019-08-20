import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import Main from "./Main";

function App() {
  return (
    <div className="container">
      <Router>
        <Route exact path={"/"} render={() => <Main />} />
        {routes.map(({ path, Component }) => (
          <Route
            exact
            key={path}
            path={path}
            render={() => (
              <React.Suspense fallback={null}>
                <Component />
              </React.Suspense>
            )}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
