import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Page } from "./components/Page/Page"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:id" children={<Page />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
