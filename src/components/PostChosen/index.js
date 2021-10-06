import React from "react";
import { Link } from 'react-router-dom';

class PostId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.post.id);
    return (
      <div className="container my-3">
        <div className="bg-info p-5 rounded shadow">
          <div className="card w-100">
            {/* <img src="/public/img/post_x_categoria.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content}}></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostId;