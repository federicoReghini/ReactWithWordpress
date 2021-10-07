import React from 'react';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: this.props.content}}></p>
      </div>
    )
  }
}

export default AboutUs;