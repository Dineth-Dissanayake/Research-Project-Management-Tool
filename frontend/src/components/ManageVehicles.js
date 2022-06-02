import axios from "axios";
import { Container, Table } from "react-bootstrap";
import React, { Component } from 'react';

export default class ManageVehicles extends Component {
    constructor(props){
        super(props);

        this.state={
            vehicles:[]
        };
    }
    
    componentDidMount() {
        this.retriveVehicles();
    }
    
    retriveVehicles(){
        axios.get("http://localhost:8000/vehicle").then(res => {
            if(res.data.success){
                this.setState({
                    vehicles: res.data.existingVehicles
                });
                console.log(this.state.vehicles);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8000/vehicle/delete/' +id).then((res) => {
            alert("Vehicle Delete Successfully");
            this.retriveVehicles();
        })
    }

    filterData(vehicles,searchKey){
        const result = vehicles.filter((vehicle) => 
            vehicle.vehicleName.toLowerCase().includes(searchKey)||
            vehicle.vehicleNumber.includes(searchKey)||
            vehicle.fuelType.toLowerCase().includes(searchKey)||
            vehicle.vCategory.toLowerCase().includes(searchKey)||
            vehicle.vStatus.toLowerCase().includes(searchKey)
        )
        this.setState({vehicles:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/vehicle").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingVehicles,searchKey)
            }
        });
    }
    
    render() {
        return (
        <Container>
            <br></br><br></br>
            <h4>MANAGE ALL VEHICLES</h4>
            <br></br><hr></hr>

            <div className="row">
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}>
                    </input>
                </div>
            </div>

            <br></br>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Number</th>
                        <th>Manufactured Year</th>
                        <th>Fuel Type</th>
                        <th>Vehicle Category</th>
                        <th>Vehicle Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.vehicles.map((vehicles, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/vehicle/'+vehicles._id} style={{ textDecoration: 'none' }}>
                                {vehicles.vehicleName}
                                </a>
                            </td>
                            <td>{vehicles.vehicleNumber}</td>
                            <td>{vehicles.manufacturedYear}</td>
                            <td>{vehicles.fuelType}</td>
                            <td>{vehicles.vCategory}</td>
                            <td>{vehicles.vStatus}</td>
                            <td>
                                <a className="btn btn-warning" href={'/edit/'+vehicles._id}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="/#" onClick={() => this.onDelete(vehicles._id)} >
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </Table>
            <br/>
            <hr></hr>

            <div class="btn-group" role="group" aria-label="Basic example"> 
                <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:10}} type="submit" class="btn btn-outline-primary"><b>DOWNLOAD REPORT</b></button>
            </div>

            <br></br><br/><br/>
        </Container>
        )
    }
}