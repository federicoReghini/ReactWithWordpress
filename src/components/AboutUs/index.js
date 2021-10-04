import React from 'react';

class AboutUs extends React.Component {

  render() {

    return (
      <div className="container min-vh-100 bg-dark">
        <div className="row">
          <div className="column">
            <audio autoPlay>
              <source src="/public/assets/audio/Daft Punk - Around the world (Official Audio).mp3" type="audio/mpeg"/>
            </audio>
            <h2>Thank You</h2>
            <div className="box">
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs;