import React from 'react';

import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to ="/portfolio/"> Akhil Reddy Katpally </Link>} scroll>
            <Navigation>
                <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/aboutme">About me</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/contact">Contact</Link>
             
            </Navigation>
        </Header>
        <Drawer title="Title" title={<Link style={{textDecoration: 'none', color: 'black'}} to ="/portfolio/"> Website </Link>}>
            <Navigation>
            <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/aboutme">About me</Link>
                <Link to="//portfolioprojects">Projects</Link>
                <Link to="/portfolio/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
