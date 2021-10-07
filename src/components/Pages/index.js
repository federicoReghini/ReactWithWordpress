import { Link } from 'react-router-dom';
import React from "react";

class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const page = this.props.data.title.rendered;

    return (
      <div>
        <Link className="nav-link" to={`/aboutUs`}>{page}</Link>
      </div>
    )
  }
}

export default Pages;