import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light navColor">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="fab fa-react"></i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/aboutUs">About us</Link>
                <Link className="nav-link" to="/">React</Link>
                <Link className="nav-link" to="/">WordPress</Link>
              </div>
            </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;