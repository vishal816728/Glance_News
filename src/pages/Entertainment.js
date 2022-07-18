import React from 'react'
import CardC from '../components/Card/CardC'

const Entertainment = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.entertainmentNews}/>:""
        }
        </>
  )
}

export default Entertainment