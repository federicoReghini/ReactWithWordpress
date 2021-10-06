import React from 'react';
import axios from 'axios';

class ReactOrWp extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const postCategories = this.props.match.categories;
    // await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/posts/${categories}`)
    //  .then(res => {
    //    const posts = res.data;
    //  })
  }

  render() {

    return (
      <div></div>
    )
  }
}

export default ReactOrWp;