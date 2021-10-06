//todo: I'll render the post chosen onClick 
//*PACKAGE
import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

//*COMPONENT
import PostId from '../PostChosen';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPost: []
    }
  }

  async componentDidMount() {
    const postId = this.props.match.params.id;
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts/${postId}`)
    .then(res => {
      const allPost = res.data;
      // console.log(allPost.id);
      // console.log(allPost);
      this.setState({ allPost })
    })
  }
  
  render() {
    const { id, slug, content } = this.state.allPost;
    console.log(this.state.allPost.content);
    return (
      <div>
        <PostId key={ id } title={ slug } content={ content?.rendered } />
      </div>     
    )
  }
}

export default withRouter(Post);