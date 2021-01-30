import './App.css';
import Main from './components/main';
import React, { Component } from 'react';
import { Layout, Header, Navigation,Tabs, Tab } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>

        <Layout>

          <Header title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>} scroll>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Main />

          <div>
            <Tabs>
              <Tab>AB</Tab>
            </Tabs>
          </div>
          
        </Layout>

      </div>
    );
  }
}

export default App;
