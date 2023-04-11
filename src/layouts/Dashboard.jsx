import { Grid,Dropdown } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetails from './CartDetails'
import { useDispatch } from 'react-redux'
import { fetchItems, fetchItemsByCategory } from '../store/actions/filterActions'


export default function Dashboard() {
  const dispatch =useDispatch()
  const handleFetchAllData=()=>{
    dispatch(fetchItems())
  }
  const handleFilterByCategory =(productCategory)=>{
    dispatch(fetchItemsByCategory(productCategory))

  }

  return (
    <div>
      <Grid>
        <Grid.Column width={2}>
          <Dropdown
            text='Filter'
            icon='filter'
            floating
            labeled
            button
            className='icon'
          >
            <Dropdown.Menu>
              <Dropdown.Header icon='tags' content='Filter by Category' />
              <Dropdown.Item onClick={()=>{handleFilterByCategory("Drink")}} >Drink</Dropdown.Item>
              <Dropdown.Item onClick={()=>{handleFilterByCategory("Chocolate")}} >Chocolate</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={()=>{handleFetchAllData()}} >All Product</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
        <Grid.Column width={14}>
          
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:name" element={<ProductDetail />} />
              <Route path="/cartsummary" element={<CartDetails />} />

            </Routes>
          
        </Grid.Column>
      </Grid>
    </div>
  )
}
