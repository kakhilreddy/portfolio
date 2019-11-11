import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      
    }
};
   
  

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#CC000000',
        accent1Color: '#e22947',
       
       
        textColor: 'white',
    },
    appBar: {
      height: 50,
    },
  });

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
        };
      }
      
    
      handleChange = (value) => {
        this.setState({
          slideIndex: value,
        });
      };
      render() {
        return (
            <div className= "projects-body">
            <MuiThemeProvider muiTheme={muiTheme}>
          <div className='projects-grid'>
              <h2 style={{paddingLeft: '0.5em', opacity: '0.9'}}>Projects</h2>
            <Tabs style={{ background: 'none', width: '96.7%', display: 'inline-block', borderRadius: '10px'}}
              onChange={this.handleChange}
              value={this.state.slideIndex}
            >
              <Tab style={{ color: 'white', 
  background: 'none'}} label="JAVA" value={0} />
              <Tab  style={{ color: 'white', 
  background: 'none'}}  label="Python" value={1} />
     <Tab label="Web" value={2} />
              <Tab label="Android" value={3} />
              <Tab label="C/C++" value={4} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              <div>

              <div style={styles.root}>

              <Card  style={{color: 'black', maxWidth: '320px', margin: 'auto', marginBottom: '2em', marginTop: '2em'}}>
  
  
  <CardTitle title="Internal Intrusion Detection and Protection System"  />
  <CardText style={{color: 'black'}}>
  It is a system which is used to find internal intruder in the organization by detecting malicious behaviors in the system by using forensic profiling techniques by extracting user patterns.
  <a target="_blank" > <i class="fa fa-external-link" > </i> </a>
  </CardText>
  
</Card>
<Card style={{color: 'black', maxWidth: '320px', margin: 'auto',  marginBottom: '2em', marginTop: '2em'}}>
  
  
  <CardTitle title="Minesweeper Game"  />
  <CardText style={{color: 'black'}}>
  The objective of the game is to clear
rectangular board containing hidden mine without detonating any of them, with help from clues
about number of neighboring mines in each field.  <a target="_blank" href="https://github.com/kakhilreddy/Minesweeper"> <i class="fa fa-external-link" > </i> </a>
  </CardText>
 
</Card>


   
  </div>
              
              </div>
              <div >
              <div style={styles.root}>

<Card  style={{color: 'black', maxWidth: '320px', margin: 'auto', marginBottom: '2em', marginTop: '2em'}}>


<CardTitle title="Detection and mitigation of biases in deep image Representations"  />
<CardText style={{color: 'black'}}>
Developed a framework to measure and mitigate intrinsic biases in datasets with respect to protected variables such as gender.
We showed that trained models amplify the association between labels and gender leading to bias in datasets. Experiments were done on COCO dataset.
<a target="_blank" > <i class="fa fa-external-link" > </i> </a>
</CardText>

</Card>




</div>
              </div>
              <div>

              <div style={styles.root}>

              <Card  style={{color: 'black', maxWidth: '320px', margin: 'auto', marginBottom: '2em', marginTop: '2em'}}>
  
  
  <CardTitle title="Social Network"  />
  <CardText style={{color: 'black'}}>
  Developed a social network application using MERN stack.
  <a target="_blank" > <i class="fa fa-external-link" > </i> </a>
  </CardText>
  
</Card>
<Card style={{color: 'black', maxWidth: '320px', margin: 'auto',  marginBottom: '2em', marginTop: '2em'}}>
  
  
  <CardTitle title="Portfolio Website"  />
  <CardText style={{color: 'black'}}>
  Developed my Portfolio Website using React<a target="_blank" href="https://github.com/kakhilreddy/Minesweeper"> <i class="fa fa-external-link" > </i> </a>
  </CardText>
 
</Card>


   
  </div>
              
              </div>
              <div>
              <div style={styles.root}>

<Card  style={{color: 'black', maxWidth: '320px', margin: 'auto', marginBottom: '2em', marginTop: '2em'}}>


<CardTitle title="Placement Portal"  />
<CardText style={{color: 'black'}}>
It is an interactive android application built from scratch to help students in their interview preparation.
<a target="_blank" href="https://github.com/kakhilreddy/Placements" > <i class="fa fa-external-link" > </i> </a>
</CardText>

</Card>
<Card style={{color: 'black', maxWidth: '320px', margin: 'auto',  marginBottom: '2em', marginTop: '2em'}}>


<CardTitle title="Flappy Bird"  />
<CardText style={{color: 'black'}}>
Clone of famous game - Flappy bird. Developed using libgdx library.  <a target="_blank" href="https://github.com/kakhilreddy/FlappyBird-Clone"> <i class="fa fa-external-link" > </i> </a>
</CardText>

</Card>



</div>
</div>

<div>

<div style={styles.root}>

<Card  style={{color: 'black', maxWidth: '320px', margin: 'auto', marginBottom: '2em', marginTop: '2em'}}>


<CardTitle title="Auto Suggest"  />
<CardText style={{color: 'black'}}>
C Program which uses Trie Data Structure to efficiently suggest similar words based on user input
<a target="_blank" href="https://github.com/kakhilreddy/AutoSuggest" > <i class="fa fa-external-link" > </i> </a>
</CardText>

</Card>



</div>
</div>
              
            </SwipeableViews>
          </div>
          </MuiThemeProvider>
          </div>
        );
      }
  


}
export default Projects;