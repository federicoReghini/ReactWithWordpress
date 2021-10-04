import React from 'react';
import axios from 'axios';

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://localhost:3006/users')
      .then(res => {
      })
  }

  render() {

    return (
      <div class="card width">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}