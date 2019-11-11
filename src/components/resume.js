import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {

    render() {
        return (
            <div className="resume-grid">
           <Grid>
            
               <Cell className="resume-right" col={12}> 
               <h2> Education</h2>
               <Education startYear={2019} endYear={2021} schoolName="Masters in Computer Science, 2021" schoolDesc="Arizona State University" />
               <Education startYear={2014} endYear={2018} schoolName="B.Tech in Computer Science, 2018" schoolDesc="JNTUH College of Engineering,Hyderabad - GPA: 82.2%" />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            
            <Grid>
    
    <Cell col={6}> 
    
    <h4 style={{marginTop: '0px'}}> Wells Fargo </h4>

    <span style={{fontStyle: 'Italic', marginTop: '0px'}}> Apps Programmer </span>

    <p>
• Developed Spring RESTful Web Services, authentication (LDAP), authorization and request filters
<br/>
• Developed UI components using Angular Framework and used Bootstrap to create responsive websites.
<br/>
• Developed Client-side Services to consume RESTful API and interceptors to handle Http requests and responses at the Client side.
    </p>
    
    </Cell>

    <Cell col={4}> 
    <p>July 2018 - July 2019</p>
  
    <span style={{fontStyle: 'Italic'}}> Hyderabad, India </span>
    </Cell>
</Grid>

<Grid>
    
    <Cell col={6}> 
    
    <h4 style={{marginTop: '0px'}}> Wells Fargo </h4>

    <span style={{fontStyle: 'Italic', marginTop: '0px'}}> Intern </span>

    <p>

    • Completed a thorough risk assessment, identifying vulnerabilities within an application, and implemented new security solutions to better protect the application.
    </p>
    
    </Cell>

    <Cell col={4}> 
    <p>Jan 2018 - Jun 2018</p>
  
    <span style={{fontStyle: 'Italic'}}> Hyderabad, India </span>
    </Cell>
</Grid>

<Grid>
    
    <Cell col={6}> 
    
    <h4 style={{marginTop: '0px'}}> Being Zero </h4>

    <span style={{fontStyle: 'Italic', marginTop: '0px'}}> Android Application Developer -Intern </span>

    <p>
 • Developed an android application where students can log in to their account and can view the details of their course enrolled in Being Zero. Students can track their progress, watch videos and can solve MCQs, coding questions.
 <br/>
• Followed Android UI design principles to design the UI and I integrated the application with back-end services.
    </p>
    
    </Cell>

    <Cell col={4}> 
    <p>May 2017 - Jun 2017</p>
  
    <span style={{fontStyle: 'Italic'}}> Hyderabad, India </span>
    </Cell>
</Grid>




            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Grid style={{color: 'white'}}>
                <Cell col={4}>
                <List>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Java</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Spring Boot</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Android</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> C++</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Node.JS</ListItemContent>
  </ListItem>

</List>

                </Cell>
                <Cell col={4}>
                <List>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Javascript</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Angular</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> MySQL</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> React</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Express</ListItemContent>
  </ListItem>

</List>

                </Cell>

                <Cell col={4}>
                <List>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> C++</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> React</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> MongoDB</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> React</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style = {{fontSize: '23px', color:'white'}}> Data Structures</ListItemContent>
  </ListItem>

</List>

                </Cell>
               

                

               


                
                
           
           
            </Grid>
               </Cell>
           </Grid>
            </div>
        )
    }
}

export default Resume;