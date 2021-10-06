import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      posts: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/categories')
     .then(res => {
      const allCategories = res.data;
      const categories = allCategories.filter(category => category.name != "Uncategorised");
  
      this.setState({ categories });
      // console.log(this.state.categories.name);
     })
    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/posts')
     .then(res => {
      const posts = res.data;
      // console.log(posts);
      this.setState({ posts });
     })
  }

  render() {
    const categoriesList = this.state.categories.map(category => <Categories key={category.id} data={category} category={category.name.rendered} />) 
    // console.log(categoriesList);
    return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light navColor shadow">
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
                { categoriesList }
              </div>
            </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;


