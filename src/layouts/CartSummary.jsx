import React from 'react'
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';


export default function CartSummary() {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item key={cartItem.product.id}>
                {cartItem.product.name}
                <Label style={{ marginLeft: "5px", backgroundColor: "red" }}>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>

            ))
          }<Dropdown.Divider />
          <Dropdown.Header>Sepete Git</Dropdown.Header>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}