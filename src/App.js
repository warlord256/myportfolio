import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',  fontfamily: 'sans-serif', fontWeight:'bold',color:'white',fontSize:"15px"}}
        to="/">HOME</Link>} scroll>
            <Navigation style={{ fontfamily: 'Oxygen'}}>
                
                <Link to="/projects"><b style={{fontSize:"15px"}}>PROJECTS</b></Link>
                <Link to="/aboutme"><b style={{fontSize:"15px"}}>WORK EXPERIENCE</b></Link>
                <Link to="/contact"><b style={{fontSize:"15px"}}>CONTACT</b></Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}}
        to="/">Home</Link>}>
            <Navigation>
              
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">Work Experience</Link>
                <Link to="/contact">Contact</Link>
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
}

export default App;
