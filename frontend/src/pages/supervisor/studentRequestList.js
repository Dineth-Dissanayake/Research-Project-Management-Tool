import '../../components/supervisor/sr_style.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { AiFillCaretDown } from "react-icons/ai";


const StudentRequestList=()=>{
    const [isActive,setIsActive] = useState(false)
    return <>
        <div className="container">
            
       <table className="table table-striped">
            <thead className="thead-dark text-center">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                
                <tr>
                <th scope="row">1</th>
                    <td>ITP project</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><div className="dropdown">
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
                        </div>
                    </td>
                </tr>
                
                <tr>
                <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        </div>
    </>
};


export default StudentRequestList;