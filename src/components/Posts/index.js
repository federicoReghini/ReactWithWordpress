//todo: here i'll show all the posts no matter witch filters etc.
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog';

class HomePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost/bedrock/web/wp-json/wp/v2/posts')
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    const postsList = this.state.posts.map(post => <Blog key={post.id} slug={post.slug} onClick={() => this.handleReadMore} title={post.title.rendered} content={post.content.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')} />);
    
    return (
      <div className="postsContainer min-vh-100">
        { postsList }
      </div>
    )
  }
}

export default HomePosts;