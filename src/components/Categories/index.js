import React from "react";
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.data.name;
    const id = this.props.data.id;

    return (
      <div>
        <Link className="nav-link" to={`/${category}/${id}`}>{category}</Link>

      </div>
    )
  }
}

export default Categories;