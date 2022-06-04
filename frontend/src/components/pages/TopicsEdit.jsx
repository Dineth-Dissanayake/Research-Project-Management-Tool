import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class TopicsEdit extends Component {

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
        const id = this.props.match.params.id;

        const {groupid,topic,field,des} = this.state;
        const data = {
            groupid:groupid,
            topic:topic,
            field:field,
            des:des
        }
        console.log(data);

        axios.put('http://localhost:8050/topics/update/'+id ,data).then((res) => {
            if(res.data.success){
                alert("MarkingSchema Updated Successfully!")
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

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/topics/'+id).then((res) => {
            if(res.data.success){
                this.setState({
                    groupid:res.data.RequestTopics.groupid,
                    topic:res.data.RequestTopics.topic,
                    field:res.data.RequestTopics.field,
                    des:res.data.RequestTopics.des

                });
                console.log(this.state.RequestTopics);
            }
        });
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>ADD MARKS TO, {this.state.groupid}</h4><br></br><hr></hr><br></br>
            <form className="row g-3">

                    <div className="col-md-6">
                        <label className="form-label">Group ID</label>
                        <input type="text" className="form-control" name="groupid" placeholder="Group ID" 
                            value={this.state.groupid}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Topic Name</label>
                        <input type="text" className="form-control" name="topic" placeholder="Topic Name" 
                            value={this.state.topic}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Specific Field</label>
                        <input type="text" className="form-control" name="field" placeholder="Specific Field" 
                            value={this.state.field}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <textarea type="text" rows="3" className="form-control" name="des" placeholder="Description"
                            value={this.state.des}
                            onChange={this.handleInputChange} />
                    </div>

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add Markings</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}