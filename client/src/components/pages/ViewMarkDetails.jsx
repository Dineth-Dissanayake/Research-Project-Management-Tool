import React, { Component } from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap";

export default class vehicledetails extends Component {

    constructor(props){
        super(props);

        this.state={
            MarkingSchema:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/MarkingSchema/' +id).then((res) => {
            if(res.data.success){
                this.setState({
                    MarkingSchema:res.data.MarkingSchema
                });
                console.log(this.state.MarkingSchema);
            }
        });
    }


    render() {
        const {markingSchemaName,markingSchemaNumber,addedDate,evaluateArea,marks} = this.state.MarkingSchema;
        return (
            <Container>
            <br></br><br></br>
            <h4>MARKING SCHEMA DETAILS</h4>
            <br></br><hr></hr><br></br>
                <dl class="row">
                    <dt className="col-sm-3">Marking Schema Name</dt>
                    <dd className="col-sm-9">{markingSchemaName}</dd>

                    <dt className="col-sm-3">Marking Schema ID</dt>
                    <dd className="col-sm-9">{markingSchemaNumber}</dd>

                    <dt className="col-sm-3">Marking Schema Added Date</dt>
                    <dd className="col-sm-9">{addedDate}</dd>

                    <dt className="col-sm-3">Marks Given Area</dt>
                    <dd className="col-sm-9">{evaluateArea}</dd>

                    <dt className="col-sm-3">Given Marks</dt>
                    <dd className="col-sm-9">{marks}</dd>
                </dl>
                <br/><br/><br/><br/>
        </Container>
        )
    }
}