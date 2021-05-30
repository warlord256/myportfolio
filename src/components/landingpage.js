import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import ReactRoundedImage from "react-rounded-image";
import Picture from './images/profilepiccircle.png';
import Typical from 'react-typical';

class LandingPage extends Component{
        render()        {
            return(
               <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div style={{width: '100%', margin: 'auto'}} >
                            <br></br>
                            <br></br>
                            <br></br>
                        <img className="profilepic"
                          src = {Picture}
                          alt="profile"                          
                        />
                        
                        <h1>
                            Hi, I'm{' '} 
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    ' Vignesh Ravi',
                                    1000,
                                    ' a Software Developer',
                                    1000
                                ]}
                            />
                        </h1>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <br></br>
                        <h1>Computer Science Graduate student at University of Florida<br></br>
                             Actively seeking Full-time SDE opportunities</h1>
                        <hr/>
                        <p>  <b>C++  |  C#  |  Java  |  F#  |  Python</b></p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/vignesh963/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* Github  */}
                            <a href="https://github.com/warlord256" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* Email  */}
                            <a href="mailto:vigneshravi@ufl.edu" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                            </a>
                            
                        </div>
                        <br></br>
                        </div>  
                    </Cell>
                    
                </Grid>
               </div>
            )
        }
}

export default LandingPage;