import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"

const JobDetail = ({name}) => {
    const {id} = useParams();
    const  getDetailData=async()=>{
        const url=`${process.env.REACT_APP_BACKEND_SERVER_URL}/${id}`
        const response=await fetch(url)
        const data = await response.json()
    }
    useEffect(()=>{getDetailData()},[])
    return (
        <div>
            ddd
        </div>
    )
}

export default JobDetail
