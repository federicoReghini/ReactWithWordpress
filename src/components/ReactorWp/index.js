import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import PostCat from '../PostCat';


class ReactOrWp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postByCategory: [],
    }
  }

  async componentDidMount() {
    const paramsCat = this.props.match.params.categories;
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts?categories=${paramsCat}`)
      .then(res => {
        const postByCategory = res.data;
        this.setState({ postByCategory })
      })
  }

  async componentDidUpdate() {
    const paramsUpdate = this.props.match.params.categories;
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts?categories=${paramsUpdate}`)
      .then(res => {
        const postCategory = res.data;
        if (paramsUpdate) {
          this.setState({ postByCategory: postCategory })
        }
      })
  }

  render() {
    const isReact = this.state.postByCategory.map(postcat => <PostCat key={postcat.id} PostCat={postcat} slug={postcat.slug} title={postcat.title.rendered} content={postcat.excerpt.rendered} />);
    return (
      <div>
        <h3 className="catName shadow p-2 mt-2">{this.props.match.params.name}</h3>
        <div>{isReact}</div>
      </div>
    )
  }
}

export default withRouter(ReactOrWp);