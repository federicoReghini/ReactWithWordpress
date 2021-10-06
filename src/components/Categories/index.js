import React from "react";
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.data.name;

    const hasCategory = () => {
      if (category == 'React') {
        <div>
          {this.props.posts}
        </div>
      } else {
        <Link to={`/${category}`}>{category}</Link>
      }
    }

    return (
      <div>
        <Link className="nav-link" to={`/${category}`} onClick={this.hasCategory}>{category}</Link>

      </div>
    )
  }
}

export default Categories;