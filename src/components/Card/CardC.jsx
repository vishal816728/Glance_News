import React from 'react'
import Card from "react-bootstrap/Card"

const CardC = (props) => {
  return (
    <>
        {
          props.properties.data.articles.map((item)=>
        
     <Card style={{ display:"flex",width: '80vw',flexDirection:'row' }} className="cardContainer">
       <Card.Img variant="top" className="cardContainerImg" src={item.urlToImage} />
       <Card.Body>
         <Card.Title>{item.title}</Card.Title>
         <Card.Text>
           {item.description}
         </Card.Text>
         <Card.Text><a href={item.url} target="_blank">Read More...</a></Card.Text>
       </Card.Body>
     </Card>
          )
    }
    </>
  )
}

export default CardC