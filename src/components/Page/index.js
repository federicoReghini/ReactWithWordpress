//PACKAGE
import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import PageChosen from '../PageChosen';


class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: []
    }
  }

  async componentDidMount() {
    const paramsPage = this.props.match.params.id;
    await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/pages/${paramsPage}`)
      .then(res => {
        const page = res.data;
        this.setState({ page })
      })
  }

  async componentDidUpdate(previousProps) {
    const paramsUpdate = this.props.match.params.id;
    const prevProps = previousProps.match.params.id;

    if (prevProps !== paramsUpdate) {
      await axios.get(`http://localhost/bedrock/web/wp-json/wp/v2/pages/${paramsUpdate}`)
        .then(res => {
          const pageUpdate = res.data;
          this.setState({
            page: pageUpdate
          });
        })
    }
  }

  render() {
    const { id, title, content } = this.state.page;
    return (
      <div>
        <PageChosen key={id} title={title?.rendered} page={this.state.page} content={content?.rendered} />
      </div>
    )
  }
}

export default withRouter(Page);