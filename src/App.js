import "./App.css";
import NavBar from "./components/nav/nav";
import Homepage from "./components/homepage/homepage";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/aboutus">
            <Homepage />
          </Route>
          <Route exact path="/services">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
