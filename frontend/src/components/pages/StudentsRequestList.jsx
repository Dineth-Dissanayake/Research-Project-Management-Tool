import React, { Component} from 'react';
import axios from "axios";
import '../style/sr_style.css';
import {Dropdown} from 'react-bootstrap';

export default class StudentsRequestList extends Component {
    
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
        requests.supervisor.toLowerCase().includes(searchKey)
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
            <h4>MANAGE ALL REQUESTS</h4>
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
                        <th>Specialization</th>
                        <th>Topic</th>
                        <th>Supervisor Name</th>
                        <th>Student Name</th>
                        {/* <th>studentName2</th>
                        <th>studentName3</th>
                        <th>studentName4</th> */}
                        <th>Request Status</th>
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
                                    <Dropdown.Item href={'/request/edit/'+requests._id}>&nbsp;View Request</Dropdown.Item>
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