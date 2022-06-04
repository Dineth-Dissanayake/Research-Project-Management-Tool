import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class StudentRequestAdd extends Component {

    constructor(props){
        super(props);
        this.state={
            specialization:"",
            topic:"",
            studentName1:"",
            studentName2:"",
            studentName3:"",
            studentName4:"",
            supervisor:""
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

        const {specialization,topic,studentName1,studentName2,studentName3,studentName4,requestStatus,supervisor} = this.state;
        const data = {
            specialization:specialization,
            topic:topic,
            studentName1:studentName1,
            studentName2:studentName2,
            studentName3:studentName3,
            studentName4:studentName4,
            requestStatus:requestStatus,
            supervisor:supervisor
        }
        console.log(data);

        axios.post("http://localhost:8050/req_supervisor/add",data).then((res) => {
            if(res.data.success){
                alert("Request Sent Successfully!")
                this.setState(
                    {
                        specialization:"",
                        topic:"",
                        studentName1:"",
                        studentName2:"",
                        studentName3:"",
                        studentName4:"",
                        supervisor:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>ADD NEW REQUEST</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Specialization</label>
                        <input type="text" className="form-control" name="specialization" placeholder="Enter Specialization"
                            value={this.state.specialization}
                            onChange={this.handleInputChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Topic Name *Accepted</label>
                        <input type="text" className="form-control" name="topic" placeholder="Enter Topic"
                            value={this.state.topic}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Enter Supervisor Name </label>
                        <input type="text" className="form-control" name="supervisor" placeholder="Enter Supervisor Name"
                            value={this.state.supervisor}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name *should be a team leader</label>
                        <input type="text" className="form-control" name="studentName1" placeholder="Student 01 Name"
                            value={this.state.studentName1}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 02</label>
                        <input type="text" className="form-control" name="studentName2" placeholder="Student 02 Name"
                            value={this.state.studentName2}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 03</label>
                        <input type="text" className="form-control" name="studentName3" placeholder="Student 03 Name"
                            value={this.state.studentName3}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 04</label>
                        <input type="text" className="form-control" name="studentName4" placeholder="Student 04 Name"
                            value={this.state.studentName4}
                            onChange={this.handleInputChange} />
                    </div>

                    {/* <div className="col-md-6">
                    <label for="requestStatus">Status</label>
                        <select name="requestStatus" id="requestStatus">
                        <option value={this.state.studentName4}>Accept</option>
                        <option value={this.state.studentName4}>Reject</option>
                        <option value={this.state.studentName4}>Pending</option>
                        </select>
                    </div> */}
                   

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>ADD PANEL</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}