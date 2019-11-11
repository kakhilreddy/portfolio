import React, {Component} from 'react';
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

class Contact extends Component {

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> 
                    <h2 style={{textAlign: 'center'}}> Contact</h2>

                    <p style={{ margin: 'auto', paddingTop: '1em', color: 'grey', fontSize: '23px'}}> Like my skills? If you think that I can contribute to your organization/non-profit - Get in touch</p>
                    
                    <List >
                       
                       <ListItem>
                         <ListItemContent style = {{fontSize: '20px',color:'white'}} >
                         <i  className="fa fa-envelope"  aria-hidden="true"/>
                             <a href="mailto:test@test.com" target="_blank" rel="noopener noreferrer" >
                         
                            <span style={{paddingLeft: '0.5em', fontSize: '16px'}}>kakhilreddy1996@gmail.com </span>
                        </a>
                            </ListItemContent>
                       </ListItem>
                       <ListItem>
                         <ListItemContent style = {{fontSize: '20px', color:'white'}} >
                             <i className="fa fa-map-marker" aria-hidden="true"/>
                         
                            <span style={{paddingLeft: '0.5em', fontSize: '16px'}}>1701 E 8th St., Tempe, Arizona-85281 </span></ListItemContent>
                       </ListItem>
                      
                     </List>
                    </Cell>
                   
                </Grid>
        
            </div>
        )
    }
}
export default Contact;