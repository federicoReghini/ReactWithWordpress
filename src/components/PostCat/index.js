import { Link } from 'react-router-dom';
import React from "react";
import Logo from '../../img/reactWp.png';

class PostCat extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const postCatId = this.props.PostCat.id; //? having issue with id
    return (
      <div className="container my-3">
        <div className="bg-info p-5 rounded shadow">
          <div className="card w-100 width">
            <img src={Logo} className="image" alt="..." />
            <div className="card-body overflow-hidden">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
            </div>
            <div className="card-footer">
              <Link to={`/posts/`} className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCat;