import React from 'react'
import CardC from '../components/Card/CardC'

const HomePage = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.generalNews}/>:""
        }
        </>
  )
}

export default HomePage