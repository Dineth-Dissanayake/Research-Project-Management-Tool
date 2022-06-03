import {Link} from 'react-router-dom';

const studentRequestList=()=>{

    return <>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <th scope="row">1</th>
                    <td>ITP project</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* <Link to="/topics-view"> */}
                                <a className="dropdown-item">view topic</a>
                            {/* </Link> */}
                                <a className="dropdown-item">edit topic</a>
                                <a className="dropdown-item">delete topic</a>
                                <a className="dropdown-item">reject</a>
                                <a className="dropdown-item">approve</a>
                            </div>
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
    
    </>
};


export default studentRequestList;