import React from 'react'
import CardC from '../components/Card/CardC'

const Politics = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.healthNews}/>:""
        }
        </>
  )
}

export default Politics