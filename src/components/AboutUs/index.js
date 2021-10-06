import React from 'react';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.content);
    return (
      <div>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: this.props.content}}></p>
      </div>
    )
  }
}

export default AboutUs;