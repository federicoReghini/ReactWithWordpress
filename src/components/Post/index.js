//todo: I'll render the post chosen onClick 
//*PACKAGE
import axios from 'axios';
import React from 'react';

//*COMPONENT
import HomePosts from '../Posts';

class Post extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   posts: []
    // }
  }

  // componentDidMount() {
  //   axios.get('http://localhost/bedrock/web/wp-json/wp/v2/posts')
  //     .then(res => {
  //       const posts = res.data;
  //       console.log('postsList');
  //       this.setState({ posts });
  //     })
  // }

  render() {
    // const postsList = this.state.posts.map(post => <HomePosts key={post.id} post={post} />);

    return (
      <div className="container">
        <div className="row">
          <div className="column mt-4">
            <div className="card width">
              <img src="/public/img/bersani.jpg" className="card-img-top img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card </h5> 
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