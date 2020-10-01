import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Row,Col,Container} from "react-bootstrap"
import Badge from 'react-bootstrap/Badge'
import moment from 'moment';
import Button from 'react-bootstrap/Button'
import {useDispatch,useSelector} from "react-redux"
import { useHistory, useLocation } from "react-router-dom";

const JobDetail = ({name}) => {
    const dispatch= useDispatch()
    const history=useHistory();
    const [data,setData]=useState(null)
    const {id} = useParams();
    const  getDetailData=async()=>{
        const url=`${process.env.REACT_APP_BACKEND_SERVER_URL}/${id}`
        const response=await fetch(url)
        const temp = await response.json()
        setData(temp)
    }
    const callLogOut=()=>{
        dispatch({type:"LOGOUT"})
        history.push(`/`);
    }
    useEffect(()=>{getDetailData()},[])
    if (!data) return <div>loading</div>
    return (
        <div className="background-detail">
            <Navbar bg="dark" variant="dark" fixed="top">
            <div className="dien-parent">
                    <img src="/images/logo-login.png" className="dien-image"/>
            </div>
            <Nav className="mr-auto">
                <Nav.Link href="#home"> </Nav.Link>
                <Nav.Link href="#features"> </Nav.Link>
                <Nav.Link href="#pricing"> </Nav.Link>
            </Nav>
            <Button variant="primary" onClick={()=>{callLogOut()}}>logout</Button>
            </Navbar>
            <div className="card-Detail">
            <div className="infor-block">
                <Container>
                    <Row>
                        <Col xs={3}>
                            <div>
                                <img src={data.img}/>
                            </div>
                        </Col>
                    <Col xs={9}>
                        <h1>{data.title}</h1>
                        {data&&data.tags.map((item)=><Badge pill variant="danger" className="dien-badge">{item}</Badge>)}
                        <h5 className="dienh5"><i class="fas fa-dollar-sign"></i> {data.salary}</h5>
                        <h5 className="dienh5"><i class="fas fa-map-marker"></i> {data.city} {data.district}</h5>
                        <h5 className="dienh5"><i class="far fa-clock"></i> {moment(data.time).fromNow()}</h5>
                        <h3>Benefits</h3>
                        <ul>
                        {data.benefits.map(item=><li className="my-li">{item}</li>)}
                        </ul>
                        
                        <h3>Description</h3>
                        <h4 className="my-li">
                            {data.description}
                        </h4>
                        <Button variant="danger">Apply Now</Button>
                    </Col>
                    </Row>       
                </Container>
            </div>
            </div>
        </div>
    )
}

export default JobDetail
