import React, { Component} from 'react';
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import '../style/marking.css'

export default class PanelHome extends Component {
    constructor(props){
        super(props);

        this.state={
            markings:[]
        };
    }
    
    componentDidMount() {
        this.retriveMarkings();
    }
    
    retriveMarkings(){
        axios.get("http://localhost:8050/MarkingSchema").then(res => {
            if(res.data.success){
                this.setState({
                    markings: res.data.existingMarkingSchema
                });
                console.log(this.state.markings);
            }
        });
    }
    
    onDelete = (id) => {
        axios.delete('http://localhost:8050/MarkingSchema/delete/' +id).then((res) => {
            alert("Marking Delete Successfully");
            this.retrivemarkings();
        })
    }

    filterData(markings,searchKey){
        const result = markings.filter((marking) => 
            marking.markingSchemaNumber.includes(searchKey)||
            marking.markingSchemaName.toLowerCase().includes(searchKey)||
            marking.evaluateArea.toLowerCase().includes(searchKey)
        )
        this.setState({markings:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8050/MarkingSchema").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingMarkingSchema,searchKey)
            }
        });
    }
    
    render() {
        return (
        <Container>
            <br></br><br></br>
            <h4>MANAGE ALL MARKINGS</h4>
            <br></br><hr></hr>

            <div className="row">
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}>
                    </input>
                </div>
            </div>

            <br></br>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Marking Schema Name</th>
                        <th>Marking Schema Number</th>
                        <th>Evaluate Area</th>
                        <th>Marks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.markings.map((markings, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <a href={'/marks-view/'+markings._id} style={{ textDecoration: 'none' }}>
                                {markings.markingSchemaName}
                                </a>
                            </td>
                            <td>{markings.markingSchemaNumber}</td>
                            <td>{markings.evaluateArea}</td>
                            <td>{markings.marks}</td>
                            <td>
                                <a className="btn marking-btn" href={'/marking-add/edit/'+markings._id}>
                                    <i className="fas fa-edit"></i>&nbsp;Add Marks
                                </a>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </Table>
            <br/>
            <hr></hr>

            <br></br><br/><br/>
        </Container>
        )
    }
}