import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
// Need this or else CSS will break //
import "rsuite/dist/styles/rsuite-default.css";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Nav />

          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
