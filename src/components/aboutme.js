import React, {Component} from 'react';
import Resume from './resume';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import ExampleComponent from "react-rounded-image";
import ProfilePhoto from '../images/0.jpeg';
import Image from 'react-bootstrap/Image';

class AboutMe extends Component {

    render() {
        return (
            <div className="landing-grid about-body">
            <Grid className="about-grid">
            <Cell col={4} phone={10} tablet={4} >
        
            <img src={ProfilePhoto} style={{ borderRadius: '100%', marginTop: '4.8em'}} roundedCircle />
           
               <div className="banner-text" style={{width:'96.7%'}}  >
                    <h1>Akhil Reddy Katpally</h1>

                    <hr/>
                    <h5>Graduate Student</h5>
                    <h6>Arizona State University</h6>
                    <div className="social-links">
                    <a href="mailto:test@test.com" target="_blank" rel="noopener noreferrer" >
                            <i  className="fa fa-envelope"  aria-hidden="true"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kakhilreddy/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                        </a>

                        <a href="https://github.com/kakhilreddy/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>

                        <a href="https://www.facebook.com/akhilcricketsixes" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-facebook"  aria-hidden="true"/>
                        </a>

                        <a href="https://www.instagram.com/akhilstar_123/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-instagram"  aria-hidden="true"/>
                        </a>

                    </div>
                    </div>
              
             
                </Cell> 
                <Cell  col={8}  >
                     <div className="banner-text" style={{marginTop: '5em', lineHeight: '1.6',  width: '96.7%', height: '90%', textAlign: 'justify'}}>  
                <h2 style={{paddingLeft:'0.5em'}}>Biography</h2>
                    <p>
                    A highly driven individual with a demonstrated history of working in a couple of MNC’s as a Software Engineer. I bring academic expertise coupled with Industry best-practises to the table.
                     My research interests include natural language processing, computer vision and robotics.
                     <br/>
                     <br/>

At Teradata, I have worked on diverse set of projects including but not limited to: Integration of Tensorflow to run analytical queries within database, and accelerating aggregation queries using GPU.
<br/>
<br/>

Prior to working at Teradata I have interned at VMware and Hedgehog Lab where I worked extensively on Java Spring framework and Android App development respectively.
<br/>
<br/>

I have completed my Bachelor of Technology in Computer Science from JNTUH College of Engineering, Hyderabad. I have been awarded The Best Outgoing Student Award and Dr. D Seetha Mahalaxmi Endowment Medal by Prof. A. Venugopal Reddy, the Vice-chancellor of JNTUH, and the chief guest, Prof. V. Ramgopal Rao, director of IIT-Delhi, for my stellar academic performance during undergraduate.
<br/>
<br/>

While I’m not into research or software engineering you will find me writing on Quora, reading books, or going for a run to kick-start by endorphin rush.</p> 


</div>                   
</Cell>   
                       </Grid>
                </div>
        )
    }
}

export default AboutMe;