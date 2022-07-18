import React from 'react'
import CardC from '../components/Card/CardC'

const HealthPage = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.healthNews}/>:""
        }
        </>
  )
}

export default HealthPage