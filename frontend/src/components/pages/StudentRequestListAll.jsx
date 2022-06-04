import React, { Component} from 'react';
import axios from "axios";
import '../style/sr_style.css';
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class StudentRequestListAll extends Component {
    
    constructor(props){
        super(props);
        this.state={
            requests:[]
        };
    }

    // const [isActive,setIsActive] = useState(false);
    
    componentDidMount() {
        this.retrieveRequests();
    }
    
    retrieveRequests(){
        axios.get("http://localhost:8050/req_supervisor").then(res => {
            if(res.data.success){
                this.setState({
                    requests: res.data.existingRequestSupervisor
                });
                console.log(this.state.requests);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8050/req_supervisor/delete/' +id).then((res) => {
            alert("Request Deleted Successfully");
            this.retrieveRequests();
        })
    }

    filterData(requests,searchKey){
        const result = requests.filter((requests) => 
        requests.topic.toLowerCase().includes(searchKey)||
        requests.studentName1.toLowerCase().includes(searchKey)
        )
        this.setState({requests:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8050/req_supervisor").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingRequestSupervisor,searchKey)
            }
        });
    }
    


    render() {
        
        return (
            
<div className="container">
            <br></br><br></br>
            <h4>STUDENTS REQUESTS</h4>
            <br></br><hr></hr>

            <div className="row">
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search Specialization"
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
                        <th>specialization</th>
                        <th>topic</th>
                        <th>Supervisor Name</th>
                        <th>student Name</th>
                        <th>request Status</th>
                        <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {this.state.requests.map((requests, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/request/show/'+requests._id} style={{ textDecoration: 'none' }}>
                                {requests.specialization}
                                </a>
                            </td>
                            <td>{requests.topic}</td>
                            <td>{requests.supervisor}</td>
                            <td>{requests.studentName1}</td>
                            <td>{requests.requestStatus}</td>
                            <td>

                            <Dropdown>
                                <Dropdown.Toggle className="db-color" variant="info" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={'/request/show/edit/'+requests._id}>&nbsp;Edit Request</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            </td>
                        </tr> 
                    ))}
            </tbody>
        </table>
            <br/>
            <hr></hr>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-outline-primary add-topic">
                    <Link to="/add">Add New Topic</Link>
                </button> 
            </div>

            <br></br><br/><br/>
</div>
        )
    }
}