//todo: I'll render the post chosen onClick 
import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   axios.get('')
  //     .then(res => {
  //     })
  // }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="column mt-4">
            <div className="card width">
              <img src="/public/img/bersani.jpg" className="card-img-top img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5> 
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;