

const TopicsList=()=>{

    return <>
    <div className="row justify-content-center">
        <div className="col-lg-12">
            <form>
                <div className="form-row">
                    <div className="form-group col-lg-6">
                    <label for="inp_name">Student Name</label>
                    <input type="text" className="form-control" id="inp_name" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group col-lg-6">
                    <label for="inp_id">Student ID</label>
                    <input type="text" className="form-control" id="inp_id" placeholder="Enter Student ID"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inp_specialization">Specialization</label>
                    <input type="text" className="form-control" id="inp_specialization" placeholder="Enter Specialization"/>
                </div>
                <div className="form-group">
                    <label for="contact">Contact Number</label>
                    <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"/>
                </div>
                <div className="form-group">
                    <label for="topic">Topic Name</label>
                    <input type="text" className="form-control" id="topic" placeholder="Enter Topic Name"/>
                </div>
                <div className="form-group">
                    <label for="status">Topic Status</label>
                    <input type="text" className="form-control" id="status" placeholder="Topic Status"/>
                </div>
            <button type="submit" className="btn btn-primary">Create Request</button>
            </form>
        </div>
    </div>
    
    </>
};


export default TopicsList;