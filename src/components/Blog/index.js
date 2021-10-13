import { Link } from 'react-router-dom';
import Logo from '../../img/reactWp.png';
import React from "react";


class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const image =
    this.props.post.better_featured_image.source_url;
    const date = this.props.post.date;

    return (
      <div className="container my-3">
        <div className="bg-info p-5 rounded shadow">
          <div className="card w-100 width">
            <div className="d-flex">
              <img src={image} className="image rounded" alt="..." />
              <div className="card-body overflow-hidden mx-3">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-around align-items-center">
              <Link to={`/posts/${this.props.post.id}`} className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;

