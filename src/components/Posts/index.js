//todo: here i'll show all the posts no matter witch filters etc.
import axios from 'axios';
import React from 'react';

//COMPONENTS
import Blog from '../Blog';

class HomePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost/bedrock/web/wp-json/wp/v2/posts')
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    const postsList = this.state.posts.map(post => 
    <Blog key={post.id} post={post} slug={post.slug} title={post.title.rendered} content={post.excerpt.rendered} />);

    return (
      <div className="postsContainer min-vh-100">
        <div className="d-flex flex-column justify-content-sm-center">
          {postsList}
        </div>
      </div>
    )
  }
}

export default HomePosts;