import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import MiddlePoint from './images/Middle-Point.png';
import PasswordGenerator from './images/Password-Generator.png';
import WorkDayScheduler from './images/Work-Day-Scheduler.png';
import WeatherDashboard from './images/Weather-Dashboard.png';
import NoteTaker from './images/noteTaker.png';
import EmployeeTracker from './images/employee-Tracker.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  projects() {

    if (this.state.activeTab === 0) {
      return (

        <div className="projects">

          {/* Middle Points */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/* <CardTitle style={{ height: '176px'}} ><img src={MiddlePoint}/></CardTitle> */}
            <img src={MiddlePoint} />
            <CardText>
              Middle Points
            </CardText>
            <CardActions border>
              <a href="https://xtreme6007.github.io/Middle-Point-TAPS/"><Button colored>Website</Button></a>
              <a href="https://github.com/xtreme6007/Middle-Point-TAPS.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Password Generator */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <img src={PasswordGenerator} />
            <CardText>
              Password Generator
            </CardText>
            <CardActions border>
              <a href="https://banda-adrian.github.io/Password-Generator.github.io/"><Button colored>Website</Button></a>
              <a href="https://github.com/banda-adrian/Password-Generator.github.io.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Work Day Scheduler */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <img src={WorkDayScheduler} />
            <CardText>
              Work Day Scheduler
            </CardText>
            <CardActions border>
              <a href="https://banda-adrian.github.io/Work-Day-Scheduler.github.io/"><Button colored>Website</Button></a>
              <a href="https://github.com/banda-adrian/Work-Day-Scheduler.github.io.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Weather Dashboard */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <img src={WeatherDashboard} />
            <CardText>
              Weather Dashboard
            </CardText>
            <CardActions border>
              <a href="https://banda-adrian.github.io/Weather-Dashboard.github.io/."><Button colored>Website</Button></a>
              <a href="https://github.com/banda-adrian/Weather-Dashboard.github.io.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Note Taker */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <img src={NoteTaker} />
            <CardText>
              Note Taker
            </CardText>
            <CardActions border>
              <a href="https://note-taker-ab.herokuapp.com/"><Button colored>Website</Button></a>
              <a href="https://github.com/banda-adrian/Note-Taker.github.io.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Employee Tracker */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <img src={EmployeeTracker} />
            <CardText>
              Employee Tracker
            </CardText>
            <CardActions border>
              <a href="https://github.com/banda-adrian/Employee-Tracker.git"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab>Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.projects()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;


          // TEMPLATE OF CARDS
          // {/* Project 2 */}
          // <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          //   <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
          //   <CardText>
          //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          //   </CardText>
          //   <CardActions border>
          //     <Button colored>GitHub</Button>
          //     <Button colored>CodePen</Button>
          //     <Button colored>Live Demo</Button>
          //   </CardActions>
          //   <CardMenu style={{ color: '#fff' }}>
          //     <IconButton name="share" />
          //   </CardMenu>
          // </Card>