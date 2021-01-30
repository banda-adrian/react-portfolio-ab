import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class HomePage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>

        <Grid className="homePageGrid">
          <Cell col={12}>

            <div>
              <h1>Adrian Banda</h1>

              <div>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/adrian-banda-44959a150/" target="_blank">
                  <icon className="fa fa-linkedin icons" />
                </a>

                {/* Github */}
                <a href="https://github.com/banda-adrian" target="_blank">
                  <icon className="fa fa-github icons" />
                </a>

                {/* Resume */}
                <a href="assets/Resume.pdf" target="_blank">
                  <icon className="fa fa-paperclip icons" />
                </a>

              </div>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
