import React from 'react'
import './components.css'
import { Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'




export default function ProductCard({ ...props }) {
  return (
    <div className='body_back' style={{ margin: "10px 10px 10px 10px" }}>
      <div className='body_front'>
        <div className='body_fill_red'><p style={{position:"relative",top:"5px"}}>{props.name}</p>
          <div style={{ marginTop: "120px"}}>{props.price}<Icon name='try'/></div>
        </div>
      </div>
      <div style={{ height: "85px" }}>
       {props.category}
      </div>
      <div>
        <Button style={{ backgroundColor: "#009900", width: "70px", marginRight: "70px" }} onClick={props.onButtonClick}>Ekle</Button>
        <Button style={{ backgroundColor: "red", width: "70px" }} >Çıkar</Button>
      </div>
    </div>
  )
}
