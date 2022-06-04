import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class StudentRequestView extends Component {

    constructor(props){
        super(props);
        this.state={
            specialization:"",
            topic:"",
            studentName1:"",
            studentName2:"",
            studentName3:"",
            studentName4:"",
            requestStatus:"",
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
        const id = this.props.match.params.id;

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

        axios.put('http://localhost:8050/req_supervisor/update/'+id ,data).then((res) => {
            if(res.data.success){
                alert("MarkingSchema Updated Successfully!")
                this.setState(
                    {
                        specialization:"",
                        topic:"",
                        studentName1:"",
                        studentName2:"",
                        studentName3:"",
                        studentName4:"",
                        requestStatus:"",
                        supervisor:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/req_supervisor/'+id).then((res) => {
            if(res.data.success){
                this.setState({
                    specialization:res.data.RequestSupervisor.specialization,
                    topic:res.data.RequestSupervisor.topic,
                    studentName1:res.data.RequestSupervisor.studentName1,
                    studentName2:res.data.RequestSupervisor.studentName2,
                    studentName3:res.data.RequestSupervisor.studentName3,
                    studentName4:res.data.RequestSupervisor.studentName4,
                    requestStatus:res.data.RequestSupervisor.requestStatus,
                    supervisor:res.data.RequestSupervisor.supervisor
                });
                console.log(this.state.RequestSupervisor);
            }
        });
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>Get Decision To, {this.state.topic}</h4><br></br><hr></hr><br></br>
            <form className="row g-3">

                    <div className="col-md-6">
                        <label className="form-label">Specialization</label>
                        <input type="text" className="form-control" name="specialization" placeholder="Specialization" disabled
                            value={this.state.specialization}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Topic Name</label>
                        <input type="text" className="form-control" name="topic" placeholder="Topic Name" disabled
                            value={this.state.topic}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Supervisor Name</label>
                        <input type="text" className="form-control" name="supervisor" placeholder="Supervisor Name" disabled
                            value={this.state.supervisor}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name *should be a leader</label>
                        <input type="text" className="form-control" name="studentName1" placeholder="Student Name" disabled
                            value={this.state.studentName1}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 2</label>
                        <input type="text" className="form-control" name="studentName2" placeholder="Student Name 2" disabled
                            value={this.state.studentName2}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 3</label>
                        <input type="text" className="form-control" name="studentName3" placeholder="Student Name 3" disabled
                            value={this.state.studentName3}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Student Name 4</label>
                        <input type="text" className="form-control" name="studentName4" placeholder="Student Name 4" disabled
                            value={this.state.studentName4}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Request Status</label>
                        <select name="requestStatus" className="form-select"
                            value={this.state.requestStatus}
                            onChange={this.handleInputChange}>
                            <option value={this.state.requestStatus}>{this.state.requestStatus}</option>
                            <option value="Accepted">Accept</option>
                            <option value="Rejected">Reject</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
                            Add Decision
                            </button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}