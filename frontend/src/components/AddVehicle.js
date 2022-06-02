import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class AddVehicle extends Component {

    constructor(props){
        super(props);
        this.state={
            vehicleName:"",
            vehicleNumber:"",
            manufacturedYear:"",
            addedDate:"",
            fuelType:"",
            vCategory:"",
            vStatus:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {vehicleName,vehicleNumber,manufacturedYear,addedDate,fuelType,vCategory,vStatus} = this.state;
        const data = {
            vehicleName:vehicleName,
            vehicleNumber:vehicleNumber,
            manufacturedYear:manufacturedYear,
            addedDate:addedDate,
            fuelType:fuelType,
            vCategory:vCategory,
            vStatus:vStatus
        }
        console.log(data);

        axios.post("http://localhost:8000/vehicle/save",data).then((res) => {
            if(res.data.success){
                alert("Vehicle Added Successfully!")
                this.setState(
                    {
                        vehicleName:"",
                        vehicleNumber:"",
                        manufacturedYear:"",
                        addedDate:"",
                        fuelType:"",
                        vCategory:"",
                        vStatus:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>ADD NEW VEHICLE</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Vehicle Name</label>
                        <input type="text" className="form-control" name="vehicleName" placeholder="Enter vehicle name"
                            value={this.state.vehicleName}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Vehicle Number</label>
                        <input type="text" className="form-control" name="vehicleNumber" placeholder="XX-0000"
                            value={this.state.vehicleNumber}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Manufactured Year</label>
                        <input type="text" className="form-control" name="manufacturedYear" placeholder="YYYY"
                            value={this.state.manufacturedYear}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Admitted Date</label>
                        <input type="text" className="form-control" name="addedDate" placeholder="(YYYY-MM-DD)"
                            value={this.state.addedDate}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Fuel Type</label>
                        <select name="fuelType" className="form-select" value={this.state.fuelType}
                            onChange={this.handleInputChange} >
                            <option>Choose...</option>
                            <option>Petrol</option>
                            <option>Diesel</option>
                            <option>Hybrid</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Vehicle Type</label>
                        <select name="vCategory" className="form-select" value={this.state.vCategory}
                            onChange={this.handleInputChange} >
                            <option>Choose...</option>
                            <option>SEDAN</option>
                            <option>COUPE</option>
                            <option>HATCHBACK</option>
                            <option>SUV</option>
                            <option>MINIVAN</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Vehicle Status</label>
                        <select name="vStatus" className="form-select" value={this.state.vStatus}
                            onChange={this.handleInputChange} >
                            <option>Choose...</option>
                            <option>Need Service</option>
                            <option>Need Repair</option>
                            <option>In Good Condition</option>
                        </select>
                    </div>

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>ADD VEHICLE</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}
