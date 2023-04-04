import React, { useEffect, useState } from 'react'
import ProductService from '../services/productServices'
import { Card as GroupCard,Icon } from 'semantic-ui-react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then((result) => setProducts(result.data))
    }, [])
    return (
        <div>
            <GroupCard.Group itemsPerRow={4}>
                {products.map(product =>
                
                <Card style={{ width: '18rem',marginTop:"50px" }} key={product.id} >
                    <Card.Body >
                        <NavLink to={`/product/${product.name}`}><Card.Title>{product.name}</Card.Title></NavLink>
                        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                        <Card.Text>
                            Product Price is = {product.price}<Icon name='lira sign' /><br/>
                            It is on offer = {String(product.on_offer)}<br/>
                        </Card.Text>
                        <Button style={{backgroundColor:"green"}} >Ekle</Button>
                        <Button style={{marginLeft:"20px",backgroundColor:"red"}}>Çıkar</Button>
                    </Card.Body>
                </Card>)}
            </GroupCard.Group>
        </div>
    )
}
