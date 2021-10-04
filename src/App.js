import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import HomePosts from './components/Posts';

function App() {
  return (
    <div className="App">
      <div className="navBarContainer">
        <Navbar />
      </div>
      <BrowserRouter>
        <HomePosts />

        <Switch>
          <Route exact path="">

          </Route>
          <Route path="">

          </Route>
          <Route path="">

          </Route>
        </Switch>
      </BrowserRouter>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
