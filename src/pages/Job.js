import React,{useEffect,useState} from 'react'
import { useHistory, useLocation } from "react-router-dom";
import JobCard from "./JobCard";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {useDispatch,useSelector} from "react-redux";
import {jobAction} from "../redux/action/jobAction";
import NavDropdown from 'react-bootstrap/NavDropdown'
const QUERYSTR_PREFIX = "q";



const Job = () => {
    const dispatch = useDispatch()
    const originalJobs=useSelector((state)=>state.job.originalJobList)
    const user=useSelector((state)=>state.auth.user);
    const[jobList,setJobList]=useState(null)
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    let query = useQuery();
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
    let history=useHistory();
    const getJob=()=>{
        dispatch(jobAction.getJobData())
        console.log("haha", originalJobs)
        // setJobList(originalJobs)
    }
    const callLogOut=()=>{
        dispatch({type:"LOGOUT"})
    }
    const jobSelect = () => {
        history.push(`/jobs/Login`);
      };
    useEffect(() => {
        handleSearch();
      }, [keyword,originalJobs]);

    const handleSearch = (e) => {
       if (originalJobs.length != 0 ){
         console.log("dds",originalJobs)
        let filteredJobs = originalJobs;
        if (e) {
          e.preventDefault();
          history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
        }
        if (keyword) {
          filteredJobs = originalJobs.filter(job =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
          );
        }
        setJobList(filteredJobs);
      }
      };
    
    useEffect(()=>{getJob()},[])

    return (
    <div className="">
        <Navbar bg="dark" variant="dark">
            <div className="dien-parent mr-auto">
                    <img src="/images/logo-login.png" className="dien-image"/>
            </div>
            {/* <Nav className="mr-auto dien">
                <Nav.Link href="#home"> </Nav.Link>
                <Nav.Link href="#features"> </Nav.Link>
                
            </Nav> */}
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event)=>setKeyword(event.target.value)} />
            <Button variant="outline-info" onSubmit={(event)=>handleSearch(event)}>Search</Button>
        </Form>
        {user===null ?
        <Button variant="primary" onClick={()=>{jobSelect()}}>login</Button> :<NavDropdown title={user.email} className="basic-nav-dropdown">
      
      <NavDropdown.Item href="#action/3.4" onClick={()=>{callLogOut()}}>LogOut</NavDropdown.Item>
    </NavDropdown>
        }
        
        </Navbar>
        
        <div className="List-job">
        { jobList && jobList.map(item => <JobCard job={item} key={item.id} id={item.id}/>)}

        </div>
      
        </div>
    )
}

export default Job
