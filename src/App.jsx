import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Order from "./components/Order";
import MainPage from "./components/MainPage";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [appForm, setAppForm] = useState({
    fullName: "",
    size: "",
    pastry: "",
    extras: [],
    note: "",
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/order">
          <Header />
          <Order setAppForm={setAppForm} />
          <Footer />
        </Route>
        <Route exact path="/success">
          <Success appForm={appForm} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
