import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
class About extends Component{
        render()        {
            return(
                <div>
                   <Grid>
                       <Cell className="resume"col={12}>
                           <h2>Work Experience</h2>
                           <h3>Software Developer | ePROMIS Solutions, Dubai (May 2014 – Nov 2019)</h3>
                           <h5>ERP Application | PowerBuilder, C++, SQL Server, Oracle DB</h5>
                           <p>• Built High availability disaster recovery (HA/DR), interactive and user centered Bank Reconciliation module. Upon deployment,
these features played a pivotal role in making ePROMIS win new orders worth 1 Million AED.
<br></br><br></br>• Developed parameterized, cached and drilled down reports using DataWindow objects to reduce report load times by 40%.
<br></br><br></br>• Created a custom dashboard to monitor daily B. I. reports aiding clients cut down costs by 25%.
<br></br><br></br>• Developed custom Order transaction component to fasten item processing and automate conversion to sales invoice, thereby
reducing the overall order processing time by 65%.
<br></br><br></br>• Coded multiple scripts in SQL to successfully migrate legacy ERP Business One application to the current automated ERP
system.
<br></br><br></br>• Performed data mining to discover correlations, patterns and trends which help in generating improved Business Intelligence
reports for decision makers in multiple domains.
<br></br><br></br>• Continuous Integration/Continuous Development (CI/CD) of existing modules to ensure overall consistency.
<br></br><br></br>• Collaborated with key stakeholders to understand the transaction requirements and programmed feasible solutions.
<br></br><br></br>• Ensured Unit, Integration tests, Code review and used SCRUM methodology for maintaining productivity.</p>
                              
                           
                       </Cell>
                   </Grid>
                </div>
            )
        }
}

export default About;