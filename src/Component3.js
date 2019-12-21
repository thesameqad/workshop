import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import {pullData} from './Actions';
 
class Component3 extends Component
{
    constructor()
    {
        super();
        // this.state = {
        //     pull: 2
        // };
    }

    onPullEvent = () =>
    {
        const pull = Math.floor(Math.random() * 10);
        this.props.onPull(pull);
    }

    render()
    {
        return (
            <div style={{backgroundColor:'yellow', padding: '20px'}}>
                <h3>Component3: push = {this.props.push}, pull = {this.props.pull}</h3>   
                <Button onClick={this.onPullEvent}>Pull</Button>           
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("mapStateToProps", state);
    return state;
}

function mapDispatchToProps(dispatch){
    console.log("mapDispatchToProps");
    return {
        onPull: (pull) => {
            console.log("OnPull", pull);
            dispatch(pullData(pull));
        } 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Component3);