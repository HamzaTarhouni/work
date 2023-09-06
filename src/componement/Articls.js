import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
export default function Articls({article}) {
    const navigate= useNavigate()
    const handelstore= (onearticle)=>{
        console.log(onearticle)
        localStorage.setItem("onearticle",JSON.stringify(onearticle))
        navigate("/info")
    }
  return (
    <div>
    <Card style={{ width: '18rem' }} onClick={()=> handelstore(article)} >
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.description.slice(0,20)}...
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}
