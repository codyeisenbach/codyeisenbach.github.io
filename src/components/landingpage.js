import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { SocialIcon } from 'react-social-icons';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require('../assets/avatar.png')}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          <SocialIcon network="linkedin" url="https://linkedin.com/in/codyeisenbach" height="25px" width="25px" />

          <SocialIcon network="github" url="https://github.com/codyeisenbach" height="25px" width="25px" />

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
