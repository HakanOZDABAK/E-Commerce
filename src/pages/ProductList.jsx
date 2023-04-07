import React, { useEffect, useState } from 'react'
import ProductService from '../services/productServices'
import { Card as GroupCard} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import ProductCard from '../components/ProductCard';
export default function ProductList() {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then((result) => setProducts(result.data))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        console.log(product)

    }
    return (
        <div>
            <GroupCard.Group itemsPerRow={4} >
                {products.map(product =>
                    <ProductCard key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        onButtonClick={() => handleAddToCart(product)} />)}

            </GroupCard.Group>
        </div>
    )
}
