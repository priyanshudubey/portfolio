import React from 'react';
//import { MDLComponent } from 'react-mdl';
import './App.css';
import {Layout,Header,Drawer,  Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
    
        <Header className='header-color' title="< Priyanshu Dubey />" >
          {/* <i class="fa fa-code" id="facolor">Priyanshu Dubey</i> */}
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

  );
}

export default App;
