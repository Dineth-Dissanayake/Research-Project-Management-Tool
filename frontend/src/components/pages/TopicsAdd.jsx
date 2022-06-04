import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class TopicsAdd extends Component {

    constructor(props){
        super(props);
        this.state={
            groupid:"",
            topic:"",
            field:"",
            des:""
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

        const {groupid,topic,field,des} = this.state;
        const data = {
            groupid:groupid,
            topic:topic,
            field:field,
            des:des
        }
        console.log(data);

        axios.post("http://localhost:8050/topics/add",data).then((res) => {
            if(res.data.success){
                alert("Request Sent Successfully!")
                this.setState(
                    {
                        groupid:"",
                        topic:"",
                        field:"",
                        des:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>ADD NEW TOPIC REQUEST</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Group ID</label>
                        <input type="text" className="form-control" name="groupid" placeholder="Enter Group ID"
                            value={this.state.groupid}
                            onChange={this.handleInputChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Topic Name </label>
                        <input type="text" className="form-control" name="topic" placeholder="Enter Topic"
                            value={this.state.topic}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Specific Field</label>
                        <input type="text" className="form-control" name="field" placeholder="Specific Field"
                            value={this.state.field}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <textarea type="text" className="form-control" name="des" placeholder="Description"
                            value={this.state.des}
                            onChange={this.handleInputChange} />
                    </div>
                   

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Send Topic Request</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}