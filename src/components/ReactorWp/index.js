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
      isTrue: false
    }
  }

  async componentDidMount() {
    const paramsCat = this.props.match.params.categories;

    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts?categories=${paramsCat}`)
      .then(res => {
        const postByCategory = res.data;
        this.setState({
          postByCategory,
          isTrue: true
        })
      })
  }

  async componentDidUpdate(previousProps) {
    const paramsUpdate = this.props.match.params.categories;
    const prevProps = previousProps.match.params.categories;

    if(prevProps !== paramsUpdate) {
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts?categories=${paramsUpdate}`)
      .then(res => {
        const postCategory = res.data;
        this.setState({
          postByCategory: postCategory,
          isTrue: false
        });
      })
    }
  }

  render() {
    console.log('not solved');
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