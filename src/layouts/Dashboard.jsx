
import { Container } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetails from './CartDetails'


export default function Dashboard() {
   

  return (
    <div>
      <Container >
        <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:name" element={<ProductDetail/>} />
        <Route path ="/cartsummary" element={<CartDetails/>}/>

        </Routes>
      </Container>
    </div>
  )
}
