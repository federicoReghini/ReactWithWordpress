import React from "react";
import { Link } from 'react-router-dom';

class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const page = this.props.data.title.rendered;
    // const id = this.props.data.id;

    return (
      <div>
        <Link className="nav-link" to={`/aboutUs`}>{page}</Link>
      </div>
    )
  }
}

export default Pages;