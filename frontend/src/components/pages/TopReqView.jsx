import React, { Component } from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap";

export default class TopReqView extends Component {

    constructor(props){
        super(props);

        this.state={
            RequestTopics:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/topics/' +id).then((res) => {
            if(res.data.success){
                this.setState({
                    RequestTopics:res.data.RequestTopics
                });
                console.log(this.state.RequestTopics);
            }
        });
    }


    render() {
        const {groupid,topic,field,des,requestStatus} = this.state.RequestTopics;
        return (
            <Container>
            <br></br><br></br>
            <h4>MARKING SCHEMA DETAILS</h4>
            <br></br><hr></hr><br></br>
                <dl class="row">
                    <dt className="col-sm-3">Group ID</dt>
                    <dd className="col-sm-9">{groupid}</dd>

                    <dt className="col-sm-3">Topic Name</dt>
                    <dd className="col-sm-9">{topic}</dd>

                    <dt className="col-sm-3">Specific Field</dt>
                    <dd className="col-sm-9">{field}</dd>

                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">{des}</dd>

                    <dt className="col-sm-3">Status</dt>
                    <dd className="col-sm-9">{requestStatus}</dd>
                </dl>
                <br/><br/><br/><br/>
        </Container>
        )
    }
}