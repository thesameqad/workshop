import React, {Component} from 'react';

import Component2 from './Component2.js'
import { connect } from 'react-redux';

class Component1 extends Component
{
    constructor()
    {
        super();
        // this.state = {
        //     push : 1,
        //     pull:0
        // }
    }

    handleOnPullEvent = (pull)=>
    {
        this.setState({pull:pull});
    } 
    render()
    {
        return (
            <div style={{backgroundColor:'red', padding: '20px'}}>
                <h3>Component 1: push = {this.props.push}, pull = {this.props.pull}</h3>
                <Component2 />
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

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
