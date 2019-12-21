import React, {Component} from 'react';

import Component3 from './Component3';
import { connect } from 'react-redux';

class Component2 extends Component
{
    constructor()
    {
        super();
        // this.state = {
        //     pull:0
        // }
    }
    handleOnPullEvent = (pull)=>
    {
        this.setState({pull:pull});
        this.props.onPull(pull);
    } 
    render()
    {
        return (
            <div style={{backgroundColor:'blue', padding: '20px'}}>
                <h3>Component 2: push = {this.props.push}, pull = {this.props.pull}</h3>
                <Component3 />
            </div>
            
        );
    }
}

function mapStateToProps(state){
    console.log("mapStateToProps", state);
    return state;
}

function mapDispatchToProps(dispatch){

}

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
