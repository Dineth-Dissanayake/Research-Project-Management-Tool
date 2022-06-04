import React, { Component } from 'react';
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class EditPanel extends Component {

    constructor(props){
        super(props);
        this.state={
            panelID:"",
            member1:"",
            member2:"",
            member3:"",
            panelType:""
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

        const {panelID,member1,member2,member3,panelType} = this.state;
        const data = {
            panelID:panelID,
            member1:member1,
            member2:member2,
            member3:member3,
            panelType:panelType
        }
        console.log(data);

        axios.put('http://localhost:8050/panel/update/'+id ,data).then((res) => {
            if(res.data.success){
                alert("Panel Updated Successfully!")
                this.setState(
                    {
                        panelID:"",
                        member1:"",
                        member2:"",
                        member3:"",
                        panelType:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get('http://localhost:8050/panel/'+id).then((res) => {
            if(res.data.success){
                this.setState({
                    panelID:res.data.panel.panelID,
                    member1:res.data.panel.member1,
                    member2:res.data.panel.member2,
                    member3:res.data.panel.member3,
                    panelType:res.data.panel.panelType
                });
                console.log(this.state.panel);
            }
        });
    }


    render() {
        return (
            <Container>
                <br></br><br></br><h4>EDIT PANEL</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Panel ID</label>
                        <input type="text" className="form-control" name="panelID" placeholder="Enter Panel ID"
                            value={this.state.panelID}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Member 01 Name</label>
                        <input type="text" className="form-control" name="member1" placeholder="Member 01 Name"
                            value={this.state.member1}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member 02 Name</label>
                        <input type="text" className="form-control" name="member2" placeholder="Member 02 Name"
                            value={this.state.member2}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member 03 Name</label>
                        <input type="text" className="form-control" name="member3" placeholder="Member 03 Name"
                            value={this.state.member3}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Panel Type</label>
                        <input type="text" className="form-control" name="panelType" placeholder="Panel Type"
                            value={this.state.panelType}
                            onChange={this.handleInputChange} />
                    </div>

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>UPDATE PANEL</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}