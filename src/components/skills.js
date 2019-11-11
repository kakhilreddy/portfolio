import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends Component {
    render() {
        return (

            <Grid>
                <Cell  col={3}>
                {this.props.skill}
                </Cell>

                <Cell col={4}>
                <ProgressBar style={{margin: 'auto', width: '50%', marginTop: '1em'}} progress={this.props.progress} />
                </Cell>
            </Grid>

        )
    }
}

export default Skills;