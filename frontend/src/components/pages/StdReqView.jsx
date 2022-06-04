import React, { Component } from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap";

export default class StdReqView extends Component {

    constructor(props){
        super(props);

        this.state={
            RequestSupervisor:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/req_supervisor/' +id).then((res) => {
            if(res.data.success){
                this.setState({
                    RequestSupervisor:res.data.RequestSupervisor
                });
                console.log(this.state.RequestSupervisor);
            }
        });
    }


    render() {
        const {specialization,topic,studentName1,studentName2,studentName3,studentName4,requestStatus,supervisor} = this.state.RequestSupervisor;
        return (
            <Container>
            <br></br><br></br>
            <h4>MARKING SCHEMA DETAILS</h4>
            <br></br><hr></hr><br></br>
                <dl class="row">
                    <dt className="col-sm-3">Specialization</dt>
                    <dd className="col-sm-9">{specialization}</dd>

                    <dt className="col-sm-3">Topic Name</dt>
                    <dd className="col-sm-9">{topic}</dd>

                    <dt className="col-sm-3">Supervisor</dt>
                    <dd className="col-sm-9">{supervisor}</dd>

                    <dt className="col-sm-3">Student Name 1</dt>
                    <dd className="col-sm-9">{studentName1}</dd>

                    <dt className="col-sm-3">Student Name 2</dt>
                    <dd className="col-sm-9">{studentName2}</dd>

                    <dt className="col-sm-3">Student Name 3</dt>
                    <dd className="col-sm-9">{studentName3}</dd>

                    <dt className="col-sm-3">Student Name 4</dt>
                    <dd className="col-sm-9">{studentName4}</dd>

                    <dt className="col-sm-3">Status</dt>
                    <dd className="col-sm-9">{requestStatus}</dd>
                </dl>
                <br/><br/><br/><br/>
        </Container>
        )
    }
}