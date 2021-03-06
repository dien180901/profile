import React,{useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { useHistory } from "react-router-dom";
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch,useSelector} from "react-redux";
import {jobAction} from "../redux/action/jobAction";

const JobCard = (props) => {
    const history=useHistory()
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.auth.user)
    const jobSelect = () => {
        history.push(`/jobs/${props.id}`);
      };
 
    return (
        <div className="job-content" onClick={() =>{jobSelect()} }>
         
         <Row>
            <Col>
              <div className="jobcard-logo">
                <div className="logo-image-border">
                <img src={props.job.img} />

                </div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="jobcard-descriptions">
                <h2 className="jobcard-title">{props.job.title}</h2>
                <div>$ {props.job.salary}</div>
                <div>
                  <ul className="benefit-list">
                    {props.job.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {props.job.tags.map(tag => (
                    <Badge variant="secondary" className="badge-style" className="dien-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <div className="date-location-box">
                {props.job.isHotjob ? (
                  <div className="badge badge-danger">Hot Job</div>
                ) : (
                  <div></div>
                )}
    
                <div className="jobcard-location">
                  <div>{props.job.city}</div>
                  <div>District {props.job.district}</div>
                </div>
                <div className="job-time">{moment(props.job.time).fromNow()}</div>
              </div>
            </Col>
          </Row>
        </div>
        
      );
}

export default JobCard

