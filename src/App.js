import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Post from './components/Post';
import HomePosts from './components/Posts';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="navBarContainer">
        <Navbar />
      </div>

        <Switch>
          <Route exact path="/">
            <HomePosts />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="">

          </Route>
        </Switch>
      <div className="footerContainer">
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
