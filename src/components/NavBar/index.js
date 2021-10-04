import React from 'react';

class NavBar extends React.Component {

  render() {
    return (
    <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light navColor fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="fab fa-react"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About us</a>
                <a class="nav-link" href="#">React</a>
                <a class="nav-link" href="#">WordPress</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;