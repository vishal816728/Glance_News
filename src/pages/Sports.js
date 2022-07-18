import React from 'react'
import CardC from '../components/Card/CardC'

const Sports = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.sportsNews}/>:""
        }
        </>
  )
}

export default Sports