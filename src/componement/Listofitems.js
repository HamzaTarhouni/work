import React from 'react'
import Articls from './Articls'

export default function Listofitems(props) {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {
            props.data.map((el,index)=>
                 <Articls key={index} article={el}/>
        )
        }

    </div>
  )
}
