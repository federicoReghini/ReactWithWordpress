import { Link } from 'react-router-dom';
import React from "react";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.data.name;
    const id = this.props.data.id;

    return (
      <div>
        <Link className="nav-link" to={`/categories/${id}/name/${category}`}>{category}</Link>
      </div>
    )
  }
}

export default Categories;