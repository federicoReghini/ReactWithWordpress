import React from "react";
import { Link } from 'react-router-dom';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container d-flex flex-row m-3">
            <div className="card width">
              {/* <img src="/public/img/post_x_categoria.jpg" className="card-img-top" alt="..." /> */}
              <div className="card-body text-break overflow-hidden">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.content}</p>
                <Link to={`/${this.props.id}`} className="btn btn-primary">Read more</Link>
              </div>
            </div>
      </div>
    )
  }
}

export default Blog;