import { connect } from "react-redux";
import Info from './Info'
import React from 'react'
import * as actionCreators from './actions/userActions'

function covidApi() {
    return (
        <div>
            <Info covidData={props.data}/> 
        </div>
    )
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, actionCreators)(covidApi)
