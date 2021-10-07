import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top footerColor fixed-bottom shadow">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted"><a href="https://www.linkedin.com/in/federico-reghini-864aa81b2/" target="_blank"> <i class="fab fa-linkedin-in"></i></a> © 2021 By Federico Reghini</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a href="https://bitbucket.org/" target="_blank"><i className="fab fa-bitbucket"></i></a></li>
            <li className="ms-3"><a href="https://reactjs.org/" target="_blank"><i className="fab fa-react"></i></a></li>
            <li className="ms-3"><a href="https://wordpress.com/" target="_blank"><i className="fab fa-wordpress"></i></a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Footer;