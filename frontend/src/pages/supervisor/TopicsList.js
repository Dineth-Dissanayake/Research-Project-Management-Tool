import React, { Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../../components/supervisor/sr_style.css';
import {Dropdown} from 'react-bootstrap';

export default class TopicsList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            requests:[]
        };
    }
    
    componentDidMount() {
        this.retrieveRequests();
    }
    
    retrieveRequests(){
        axios.get("http://localhost:8050/topics").then(res => {
            if(res.data.success){
                this.setState({
                    requests: res.data.existingRequestTopics
                });
                console.log(this.state.requests);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8050/topics/delete/' +id).then((res) => {
            alert("Request Deleted Successfully");
            this.retrieveRequests();
        })
    }

    filterData(requests,searchKey){
        const result = requests.filter((requests) => 
        requests.field.toLowerCase().includes(searchKey)||
        requests.groupid.toLowerCase().includes(searchKey)
        )
        this.setState({requests:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8050/topics").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingRequestTopics,searchKey)
            }
        });
    }
    


    render() {
        
        return (
            
<div className="container">
            <br></br><br></br>
            <h4>MANAGE ALL Requests</h4>
            <br></br><hr></hr>

            <div className="row">
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search By Group ID or Field"
                        name="searchQuery"
                        onChange={this.handleSearchArea}>
                    </input>
                </div>
            </div>

            <br></br>

            <table className="table table-striped">
            <thead className="thead-dark text-center">
                <tr>
                        <th>#</th>
                        <th>Group ID</th>
                        <th>Topic</th>
                        <th>Field</th>
                        <th>Request Status</th>
                        <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {this.state.requests.map((requests, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/topics/'+requests._id} style={{ textDecoration: 'none' }}>
                                {requests.groupid}
                                </a>
                            </td>
                            <td>{requests.topic}</td>
                            <td>{requests.field}</td>
                            <td>{requests.requestStatus}</td>
                            <td>

                            <Dropdown>
                                <Dropdown.Toggle className="db-color" variant="info" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={'/topics-view/'+requests._id}>&nbsp;View Request</Dropdown.Item>
                                    &nbsp;
                                    <Dropdown.Item variant="danger" onClick={() => this.onDelete(requests._id)}
                                     href="#/action-2">&nbsp;Delete Request</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            </td>
                        </tr> 
                    ))}
            </tbody>
        </table>
            <br/>
            <hr></hr>

            {/* <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-outline-primary">
                    <Link to="/add">Add New Panel</Link>
                </button> 
            </div> */}


            <br></br><br/><br/>
</div>
        )
    }
}