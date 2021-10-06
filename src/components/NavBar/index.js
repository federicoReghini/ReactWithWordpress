import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost/bedrock/web/wp-json/wp/v2/categories')
     .then(res => {
      const categories = res.data;
      this.setState({ categories });
      // console.log(categories);
     })
  }

  render() {
    const categoriesList = this.state.categories.map(category => <NavBar key={category.id} categorie={category.name.rendered} />) 
    // console.log(categoriesList);
    return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light navColor">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/css"><i className="fab fa-react"></i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/aboutUs">About us</Link>
                {/* <Link className="nav-link" to="/">React</Link>
                <Link className="nav-link" to="/">WordPress</Link> */}
                {/* { categoriesList } */}
              </div>
            </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;


