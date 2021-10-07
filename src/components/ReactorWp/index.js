import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PostCat from '../PostCat';

class ReactOrWp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postByCategory: [],
      // categories: []
    }
  }

  async componentDidMount() {
    const paramsCat = this.props.match.params.categories;
    // const catName = this.props.match.params.name;
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts?categories=${paramsCat}`)
     .then(res => {
      const postByCategory = res.data;   
      this.setState({ postByCategory })
     })
  }

  render() {
    console.log(this.state.postByCategory);
    // console.log(postCat);
    const isReact = this.state.postByCategory.map(postcat => <PostCat key={postcat.id} dangerouslySetInnerHTML={{ __html: this.state.postByCategory.content}} />)
    return (
      <div>{ isReact }</div>
    )
  }
}

export default withRouter(ReactOrWp);