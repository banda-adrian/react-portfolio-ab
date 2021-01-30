import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (

      <div>

        <div>
          <Tabs>
            <Tab>Contact</Tab>
          </Tabs>
        </div>

        <Grid>
          <Cell col={8}>

            <h2>Contact Me</h2>
            <hr />

            <div>
              <List>

                {/* Email */}
                <ListItem>
                  <ListItemContent>
                    <icons className="fa fa-envelope-o icons"/>
                    banda_adrian@outlook.com
                  </ListItemContent>
                </ListItem>

                {/* Number */}
                <ListItem>
                  <ListItemContent>
                    <icons className="fa fa-mobile icons"/>
                    (469) 671-4064
                  </ListItemContent>
                </ListItem>

                {/* Instagram */}
                <ListItem>
                  <ListItemContent>
                    <icons className="fa fa-instagram icons"/>
                    @codebybanda
                  </ListItemContent>
                </ListItem>

              </List>
            </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Contact;
