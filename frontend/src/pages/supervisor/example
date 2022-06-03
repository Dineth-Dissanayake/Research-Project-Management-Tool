import React, { Component} from 'react';
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class PanelAlocation extends Component {
    constructor(props){
        super(props);

        this.state={
            panels:[]
        };
    }
    
    componentDidMount() {
        this.retrivePanels();
    }
    
    retrivePanels(){
        axios.get("http://localhost:8050/panels").then(res => {
            if(res.data.success){
                this.setState({
                    panels: res.data.existingPanel
                });
                console.log(this.state.panels);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8050/panel/delete/' +id).then((res) => {
            alert("Panel Delete Successfully");
            this.retrivePanels();
        })
    }

    filterData(panels,searchKey){
        const result = panels.filter((panel) => 
            panel.panelID.includes(searchKey)||
            panel.panelType.toLowerCase().includes(searchKey)
        )
        this.setState({panels:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8050/panels").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingPanel,searchKey)
            }
        });
    }
    
    render() {
        return (
        <Container>
            <br></br><br></br>
            <h4>MANAGE ALL PANELS</h4>
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
                        <th>Panel ID</th>
                        <th>Member 01</th>
                        <th>Member 02</th>
                        <th>Member 03</th>
                        <th>Panel Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.panels.map((panels, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/panel/'+panels._id} style={{ textDecoration: 'none' }}>
                                {panels.panelID}
                                </a>
                            </td>
                            <td>{panels.member1}</td>
                            <td>{panels.member2}</td>
                            <td>{panels.member3}</td>
                            <td>{panels.panelType}</td>
                            <td>
                                <a className="btn btn-warning" href={'/edit/'+panels._id}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="/panel-management" onClick={() => this.onDelete(panels._id)} >
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
                <button type="submit" class="btn btn-outline-primary">
                    <Link to="/add">Add New Panel</Link>
                </button> 
            </div>


            <br></br><br/><br/>
        </Container>
        )
    }
}