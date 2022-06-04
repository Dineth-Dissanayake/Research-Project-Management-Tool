import React, { Component} from 'react';
import axios from "axios";
import '../style/sr_style.css';
import {Dropdown} from 'react-bootstrap';

export default class TopicsList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            topics:[]
        };
    }

    // const [isActive,setIsActive] = useState(false);
    
    componentDidMount() {
        this.retrieveTopics();
    }
    
    retrieveTopics(){
        axios.get("http://localhost:8050/topics").then(res => {
            if(res.data.success){
                this.setState({
                    topics: res.data.existingRequestTopics
                });
                console.log(this.state.topics);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8050/topics/delete/' +id).then((res) => {
            alert("Topic Deleted Successfully");
            this.retrieveTopics();
        })
    }

    filterData(topics,searchKey){
        const result = topics.filter((topics) => 
        topics.field.toLowerCase().includes(searchKey)||
        topics.groupid.toLowerCase().includes(searchKey)
        )
        this.setState({topics:result})
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
                        <th>Group Id</th>
                        <th>Topic</th>
                        <th>Field</th>
                        <th>Request Status</th>
                        <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {this.state.topics.map((topics, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/topic/show/'+topics._id} style={{ textDecoration: 'none' }}>
                                {topics.groupid}
                                </a>
                            </td>
                            <td>{topics.topic}</td>
                            <td>{topics.field}</td>
                            <td>{topics.requestStatus}</td>
                            <td>

                            <Dropdown>
                                <Dropdown.Toggle className="db-color" variant="info" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={'/topics-list/edit/'+topics._id}>&nbsp;View Request</Dropdown.Item>
                                    &nbsp;
                                    <Dropdown.Item variant="danger" onClick={() => this.onDelete(topics._id)}
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