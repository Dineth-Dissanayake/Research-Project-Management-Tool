import React, { Component } from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap";

export default class vehicledetails extends Component {

    constructor(props){
        super(props);

        this.state={
            vehicle:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8000/vehicle/' +id).then((res) => {
            if(res.data.success){
                this.setState({
                    vehicle:res.data.vehicle
                });
                console.log(this.state.vehicle);
            }
        });
    }


    render() {
        const {vehicleName,vehicleNumber,manufacturedYear,addedDate,fuelType,vCategory,vStatus} = this.state.vehicle;
        return (
            <Container>
            <br></br><br></br>
            <h4>VEHICLE DETAILS</h4>
            <br></br><hr></hr><br></br>
                <dl class="row">
                    <dt className="col-sm-3">Vehicle Name</dt>
                    <dd className="col-sm-9">{vehicleName}</dd>

                    <dt className="col-sm-3">Vehicle Number</dt>
                    <dd className="col-sm-9">{vehicleNumber}</dd>

                    <dt className="col-sm-3">Manufactured Year</dt>
                    <dd className="col-sm-9">{manufacturedYear}</dd>

                    <dt className="col-sm-3">Added Date</dt>
                    <dd className="col-sm-9">{addedDate}</dd>

                    <dt className="col-sm-3">Fuel Type</dt>
                    <dd className="col-sm-9">{fuelType}</dd>

                    <dt className="col-sm-3">Vehicle Category</dt>
                    <dd className="col-sm-9">{vCategory}</dd>

                    <dt className="col-sm-3">Vehicle Status</dt>
                    <dd className="col-sm-9">{vStatus}</dd>
                </dl>
                <br/><br/><br/><br/>
        </Container>
        )
    }
}