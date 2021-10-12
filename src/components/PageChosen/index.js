import React from 'react';

class PageChosen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <div>
        <div>
          <h2 className="shadow p-2">{this.props.title}</h2>
        </div>
        <p className="text-center my-3" dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
      </div>
    )
  }
}

export default PageChosen;