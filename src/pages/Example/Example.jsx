import React, { useEffect, useState } from 'react'
import "./example.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllReports } from '../../config/authReport'
import { getSSResults } from '../../config/getSoftSkillResults'
import { Container } from 'react-bootstrap'
const Example = () => {
    const dispatch = useDispatch()
    const allreport = useSelector(state => state.report.allreport)
    const data = useSelector(state => state.softSkillResult.softResult)
    useEffect(() => {
        dispatch(getAllReports())
        dispatch(getSSResults())
    }, [dispatch])


    console.log(allreport, "allreport")
    console.log(data, "data")

useEffect(()=>{
    if (data && allreport) {
        const filterData = data?.filter(dat=>{return(console.log(dat.level))})
    }
},[data])

    useEffect(() => {
        if (allreport) {
            /* allreport?.filter(data=>console.log(data.skillLevel,"data"))
            data?.filter(data=>console.log(data.level,"dataad")) */
           
        }
    }, [data, allreport])
    return (
        <Container className='w-75 p-5'>
            <div className='d-flex justify-content-between border p-2'>
                {
                    allreport?.map((data, index) => (

                        <p className='border p-2' key={index}>
                            {data.skillName}
                        </p>
                    ))
                }
            </div>


        </Container>
    )
}

export default Example