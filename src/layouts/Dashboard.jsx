
import { Container } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'


export default function Dashboard() {
   

  return (
    <div>
      <Container>
        <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:name" element={<ProductDetail/>} />

        </Routes>
      </Container>
    </div>
  )
}
