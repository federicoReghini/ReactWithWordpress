import { Link } from 'react-router-dom';
import React from "react";

class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const idPage = this.props.page.id;
    const page = this.props.page.title.rendered;

    return (
      <div>
        <Link className="nav-link" to={`/pages/${idPage}`}>{page}</Link>
      </div>
    )
  }
}

export default Pages;