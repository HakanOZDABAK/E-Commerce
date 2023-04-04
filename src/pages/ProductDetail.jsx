import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productServices'
import { Card, Icon } from 'semantic-ui-react'

export default function ProductDetail() {
  let { name } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    let productService = new ProductService()
    productService.getProductByName(name).then(result => setProduct(result.data))
  }, []
  )

  return (
    <div>
      <Card style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{product.category}</span>
          </Card.Meta>
          <Card.Description>
            It is on offer ? = {String(product.on_offer)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a style={{ fontWeight: "bold" }}>
            It is {product.price} 
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}
