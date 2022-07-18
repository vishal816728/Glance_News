import React from 'react'
import CardC from '../components/Card/CardC'

const Technology = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.technologyNews}/>:""
        }
        </>
  )
}

export default Technology