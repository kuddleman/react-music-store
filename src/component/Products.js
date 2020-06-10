import React, { Component } from 'react'
import JSON from './db.json'

class Products extends Component {

  constructor() {
    super()

    this.state = {
      title: 'Products Page', 
      products: JSON
    }
  }

  render() {
    return (
      <div>
        <h2>{ this.state.title }</h2>
      </div>
    )
  }


}

export default Products