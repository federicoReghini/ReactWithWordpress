import React from "react";

class PostId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container my-3">
        <div className="bg-info p-5 rounded shadow">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostId;