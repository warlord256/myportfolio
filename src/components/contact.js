import React, { Component } from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardTitle,CardActions,Button, CardMenu, IconButton, CardText} from 'react-mdl';
class Contact extends Component{
        render()        {
            return(
                <div>
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <div style={{width: '100%', margin: 'auto'}} >
                        </div>
                       
                        <h2>CONTACT INFO</h2>
                        <br></br>
                        <br></br>
                        <div className="contact-links">

                        {/* Phone */}
                        <Card shadow={5} style={{minWidth: '450',margin:'20px'}}>     
                        <CardTitle style={{color: "black", height: '0px'}}></CardTitle>                   
                            <a >
                                <i className="fa fa-phone" aria-hidden="true"/>                                
                                <h3><b>Phone</b>
                                <p>(352) 871 4509</p></h3>
                            </a>
                        </Card>


                        {/* Email  */}
                        <Card shadow={5} style={{minWidth: '450',margin:'20px'}}>
                        <CardTitle style={{color: "black", height: '0px'}}></CardTitle>
                            <a >
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                <h3><b>Email</b>
                                    <p>vigneshravi@ufl.edu <br></br>  vigneshravicse@live.com</p></h3>                                
                                
                                
                            </a>
                        </Card>

                        {/* Location  */}
                        <Card shadow={5} style={{minWidth: '450',margin:'20px'}}>
                        <CardTitle style={{color: "black", height: '0px'}}></CardTitle>
                            <a >
                                <i className="fa fa-map-marker" aria-hidden="true"/>
                                <h3><b>Location</b>
                                <p>Gainesville, Florida</p></h3>                            
                            </a>
                        </Card>

                        </div>
                    </Cell>
                </Grid>
               </div>
            )
        }
}

export default Contact;