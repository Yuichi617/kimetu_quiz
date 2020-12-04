import React, {Component} from 'react';

class Choice extends Component{
    constructor(props){
        super(props);
        this.cname = "./static/choices/" + props.cname;
    }

    render(){
        return (
            <object data={this.cname} type="text/plain" width="80%"></object>
        );
    }
}
export default Choice;