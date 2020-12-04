import React, {Component} from 'react';

class Question extends Component{
    constructor(props){
        super(props);
        this.qname = "./static/questions/" + props.qname;
    }

    render(){
        return (
            <object data={this.qname} type="text/plain" width="80%"></object>
        );
    }
}
export default Question;