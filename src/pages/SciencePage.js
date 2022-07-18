import React from 'react'
import CardC from '../components/Card/CardC'

const SciencePage = (props) => {
  return (
    <>
        {
          props?<CardC properties={props.scienceNews}/>:""
        }
        </>
  )
}

export default SciencePage