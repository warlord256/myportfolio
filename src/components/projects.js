import React, { Component } from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardTitle,CardActions,Button, CardMenu, IconButton, CardText} from 'react-mdl';
import medusa from './images/medusa.png';
import bittorrent from './images/bittorrent.png';
import databasesystem from './images/databasesystem.png';
import distributedsystem from './images/distributedsystem.png';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
        return(
            <div className = "projects-grid">
        

            {/*BitTorrent*/}
             <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                <CardTitle style={{color: "black", height: '300px', backgroundImage: `url(${bittorrent})`, backgroundPosition: 'center', backgroundSize: '120%', backgroundRepeat: 'no-repeat',fontWeight: 'bold'}}></CardTitle>
                <CardText style={{color: "black"}}>
                <p style={{color:"rgb(63, 90, 197)",fontWeight:"bold",fontSize:"25px"}}>BitTorrent Simulator</p>
                Built a <b>P2P </b> file sharing application using <b>BitTorrent Protocol</b>.
It implements the <b>choking-unchoking mechanism</b> which is one of the most important features of BitTorrent.
                </CardText>
                <CardActions border>
                    <p style={{color:"black",fontWeight:"bold"}}>Java</p>
                    <Button colored><a  href="https://github.com/warlord256/BitTorrentClone" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
                    
            </Card>

            {/* Database Implementation */}
            <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                    <CardTitle style={{color: "black", height: '275px', backgroundImage: `url(${databasesystem})`, backgroundPosition: 'center', backgroundSize: '80%', backgroundRepeat: 'no-repeat',fontWeight: 'bold'}}></CardTitle>
                    <CardText style={{color: "black"}}>
                    <p style={{color:"rgb(63, 90, 197)",fontWeight:"bold",fontSize:"25px"}}>Database Implementation</p>
                    Designed a single-user database management system that supports a subset of SQL and basic relational algebra operations like select, project, join, sum, group by and duplicate removal. Built a <b>heap and sorted file</b> organization to manage database records.

                    </CardText>
                    <CardActions border>
                        <p style={{color:"black",fontWeight:"bold"}}>C++</p>
                        <Button colored><a  href="https://github.com/warlord256/sortedFile" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                    </CardActions>
                        
            </Card>

            {/*Twitter Clone*/}    
            <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                    <CardTitle style={{color: "black", height: '300px', backgroundImage: `url(${distributedsystem})`, backgroundPosition: 'center', backgroundSize: '80%    ', backgroundRepeat: 'no-repeat',fontWeight: 'bold'}}></CardTitle>
                    <CardText style={{color: "black"}}>
                    <p style={{color:"rgb(63, 90, 197)",fontWeight:"bold",fontSize:"25px"}}>Twitter Clone</p>
                    Created a twitter engine clone using <b>Akka actors and WebSockets</b> which concurrently handles user requests.
• Recorded the tweeting and querying efficiency by running a network of 1000 actors simulating the zipf-distribution behavior.

                    </CardText>
                    <CardActions border>
                        <p style={{color:"black",fontWeight:"bold"}}>F# | Akka | WebSockets</p>
                        <Button colored><a  href="https://github.com/warlord256/TweeterEngine" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                    </CardActions>
                        
            </Card>

                {/*Medusa*/}
                <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                <CardTitle style={{color: "rgb(0, 0, 245)", height: '300px', backgroundImage: `url(${medusa})`,
                 backgroundPosition: 'center', backgroundSize: '80%', backgroundRepeat: 'no-repeat',
                 fontWeight: "bold"}}></CardTitle>
                <CardText style={{color: "black"}}>
                <p style={{color:"rgb(63, 90, 197)",fontWeight:"bold",fontSize:"25px"}}>Medusa</p>
                Using the <b>Medusa</b> app users register themselves, and log-in to machines whose clipboards are then globally synced in an on-demand
fashion.User data is (transiently) housed in Azure Cosmos DB. 
                </CardText>
                <CardActions border>
                    <p style={{color:"black",fontWeight:"bold"}}>C# | Azure Cloud | Cosmos DB</p>
                    <Button colored><a  href="https://github.com/warlord256/Medusa" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>

            </Card>
            
            </div>
            )       
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>ANgular</h1></div>
            )
        }
    }
    
        render()        {
            return(
                <div className="category-tabs">
        
                
                    <Grid >
                        <Cell col ={12}>
                            <h2>PROJECTS</h2>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default Projects;