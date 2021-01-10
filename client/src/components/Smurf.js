import React from 'react';
import styled from 'styled-components'

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<Box data-testid="smurf" className="card">
            <h4>{this.props.smurf.name}</h4>
            <p>Position: {this.props.smurf.position} | Nickname: {this.props.smurf.nickname}</p>
            <p>{this.props.smurf.description}</p>
        </Box>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.

const Box = styled.div`
    padding: 1rem;
    margin: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.25)
`