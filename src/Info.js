import React from 'react'

function Info(props) {
    return (
        <div className="card bg-info border border-white text-white text-capitalize w-25 my-5 mx-2 shadow-sm rounded">
        <div className="card-header  font-weight-bold">
            state: {props.covidData.state}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item bg-danger"><span className='font-weight-bold'>confirmed cases:</span> {props.covidData.confirmedCases}</li>
            <li className="list-group-item bg-primary"><span className='font-weight-bold'>admitted cases:</span> {props.covidData.casesOnAdmission}</li>
            <li className="list-group-item bg-warning"><span className='font-weight-bold'>discharged: </span>{props.covidData.discharged}</li>
            <li className="list-group-item bg-secondary"><span className='font-weight-bold'>deaths: </span>{props.covidData.death}</li>
        </ul>
        </div>
    )
}

export default Info
