import React, { Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../../components/supervisor/sr_style.css';
import {Dropdown} from 'react-bootstrap';

export default class StudentRequest extends Component {
    
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
        requests.specialization.toLowerCase().includes(searchKey)||
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
            <h4>MANAGE ALL Requests</h4>
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
                        <th>student Name</th>
                        {/* <th>studentName2</th>
                        <th>studentName3</th>
                        <th>studentName4</th> */}
                        <th>requestStatus</th>
                        <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {this.state.requests.map((requests, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/req_supervisor/'+requests._id} style={{ textDecoration: 'none' }}>
                                {requests.specialization}
                                </a>
                            </td>
                            <td>{requests.topic}</td>
                            <td>{requests.studentName1}</td>
                            {/* <td>{requests.studentName2}</td>
                            <td>{requests.studentName3}</td>
                            <td>{requests.studentName4}</td> */}
                            <td>{requests.requestStatus}</td>
                            <td>

                            <Dropdown>
                                <Dropdown.Toggle className="db-color" variant="info" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={'/request-list/edit/'+requests._id}>&nbsp;View Request</Dropdown.Item>
                                    &nbsp;
                                    <Dropdown.Item variant="danger" onClick={() => this.onDelete(requests._id)}
                                     href="#/action-2">&nbsp;Delete Request</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <div className="dropdown">
                            <div className="dropdown-btn" id="dropdownMenuButton" onClick={e => setIsActive(!isActive)}>
                                Dropdown button <AiFillCaretDown />
                            </div>
                                {isActive && (
                                    <div className="dropdown-content">
                                    <Link to="/topics-view">
                                        <div className="dropdown-item">view topic</div>
                                    </Link>
                                        <div className="dropdown-item">edit topic</div>
                                        <div className="dropdown-item">delete topic</div>
                                        <div className="dropdown-item">reject</div>
                                        <div className="dropdown-item">approve</div>
                                    </div>
                                )}
                            </div> */}

                                {/* <a className="btn btn-warning" href={'/edit/'+requests._id}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="/request" onClick={() => this.onDelete(requests._id)} >
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </a> */}

                            </td>
                        </tr> 
                    ))}
            </tbody>
        </table>
            <br/>
            <hr></hr>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-outline-primary">
                    <Link to="/add">Add New Panel</Link>
                </button> 
            </div>


            <br></br><br/><br/>
</div>
        )
    }
}