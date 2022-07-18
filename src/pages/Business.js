import React from 'react'
import CardC from '../components/Card/CardC'

const Business = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.businessNews}/>:""
        }
        </>
  )
}

export default Business