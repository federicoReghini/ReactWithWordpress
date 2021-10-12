//PACKAGE
import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';

//COMPONENTS
import Categories from '../Categories';
import Pages from '../Pages';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      posts: [],
      pages: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/categories')
      .then(res => {
        const allCategories = res.data;
        const categories = allCategories.filter(category => category.name != "Uncategorised");

        this.setState({ categories });
      })

    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/posts')
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })

    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/pages')
      .then(res => {
        const pages = res.data;
        this.setState({ pages });
      })
  }

  render() {
    const categoriesList = this.state.categories.map(category => <Categories key={category.id} data={category} category={category.name.rendered} />)

    const pagesList = this.state.pages.map(page => <Pages key={page.id} page={page} slug={page.slug} />)

    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light navColor shadow">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/css"><i className="fab fa-react"></i></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {pagesList}
                {categoriesList}
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;