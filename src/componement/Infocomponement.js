import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
export default function Articls() {
    useEffect(()=>{
var prod =localStorage.getItem('onearticle')
console.log(JSON.parse(prod) )
    } ,[])
  return (
    <div>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>""</Card.Title>
        <Card.Text>
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}
