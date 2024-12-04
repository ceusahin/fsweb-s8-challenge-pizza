import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import MainPage from "./components/MainPage";
import Success from "./components/Success";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
          <Footer />
        </Route>
        <Route exact path="/order">
          <Header />
          <Order />
          <Footer />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
