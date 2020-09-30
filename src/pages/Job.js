import React,{useEffect,useState} from 'react'
import { useHistory, useLocation } from "react-router-dom";
import JobCard from "./JobCard";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const QUERYSTR_PREFIX = "q";



const Job = () => {

    const [originalJobs,setOriginalJobs]=useState("")
    const[jobList,setJobList]=useState([])
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    let query = useQuery();
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
    let history=useHistory();
    const getJobData=async()=>{
        try{
            const url=`${process.env.REACT_APP_BACKEND_SERVER_URL}`
            const response= await fetch(url)
            const data = await response .json()
            setOriginalJobs(data)
            console.log("data",data)
            setJobList(data)
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(() => {
        handleSearch();
      }, [keyword]);

    const handleSearch = (e) => {
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
      };
    
    useEffect(()=>{getJobData()},[])

    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <div className="dien-parent">
                    <img src="/images/logo-login.png" className="dien-image"/>
            </div>
            <Nav className="mr-auto">
                <Nav.Link href="#home"> </Nav.Link>
                <Nav.Link href="#features"> </Nav.Link>
                <Nav.Link href="#pricing"> </Nav.Link>
            </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event)=>setKeyword(event.target.value)} />
            <Button variant="outline-info" onSubmit={(event)=>handleSearch(event)}>Search</Button>
        </Form>
        </Navbar>
        <div className="List-job">
        {jobList && jobList.map(item => <JobCard job={item} key={item.id} />)}

        </div>
      
        </div>
    )
}

export default Job
