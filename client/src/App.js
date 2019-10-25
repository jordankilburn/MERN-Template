import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

//Mat UI Global Theme
const theme = createMuiTheme({
  palette: {
    primary: { main: "#8A9E6E", contrastText: "white" },
    secondary: { main: "#E2E08B", contrastText: "black" }
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "15px"
    }
  }
});

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
