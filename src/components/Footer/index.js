import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 border-top footerColor fixed-bottom">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <div><i class="fab fa-react"></i></div>
          </a>
          <span class="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a href="https://bitbucket.org/" target="_blank"><i class="fab fa-bitbucket"></i></a></li>
          <li class="ms-3"><a href="https://reactjs.org/" target="_blank"><i class="fab fa-react"></i></a></li>
          <li class="ms-3"><a href="https://wordpress.com/" target="_blank"><i class="fab fa-wordpress"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;