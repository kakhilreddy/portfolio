import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import AboutMe from './aboutme';

class LandingPage extends Component {

    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <div>
             
             <AboutMe/>
                     </div>
                    <div>
                    <Resume/>
                    </div>
                    <div>
                    <Projects/>
                     </div>
                     <div>
                     <Contact/>
                     </div>
            </div>
        )
    }
}

export default LandingPage;