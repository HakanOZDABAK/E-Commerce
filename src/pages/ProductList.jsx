import React, { useEffect, useState } from 'react'
import { Card as GroupCard } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import ProductCard from '../components/ProductCard';
import { fetchItems } from '../store/actions/filterActions';
import ProductService from '../services/productServices';
export default function ProductList() {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);
    const product = useSelector((state)=>state.filter.filterProducts)
    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data))
        dispatch(fetchItems())
        
       
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));

    }
    console.log(product)
    return (
        <div>
            <GroupCard.Group itemsPerRow={4} >
            {product.map((item) =>
                    <ProductCard key={item.id}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        onButtonClick={() => handleAddToCart(item)} />)}

            </GroupCard.Group>
        </div>
    )
}
