import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'

export default class Navi extends Component {
  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render() {
    const { activeItem } = this.state
    return (
      
      <Segment style={{borderRadius:"30%"}} inverted>

        <Menu  inverted pointing secondary >
          <Container>
          <Link to='/products' >  <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            </Link>
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              {<CartSummary/>}
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    )
  }
}
