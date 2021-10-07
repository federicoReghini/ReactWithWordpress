//PACKAGE
import axios from 'axios';
import React from 'react';

//COMPONENTS
import AboutUs from '../AboutUs';


class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost/bedrock/web/wp-json/wp/v2/pages')
      .then(res => {
        const pages = res.data;
        this.setState({ pages })
      })
  }

  render() {
    const pages = this.state.pages.map(page => <AboutUs key={page.id} page={page} content={page.content.rendered} dangerouslySetInnerHTML={{ __html: page.content }} />)

    return (
      <div>
        <div >
          {pages}
        </div>
      </div>
    )
  }
}

export default Page;