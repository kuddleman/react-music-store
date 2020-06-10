import React, { Component } from 'react'

class Products extends Component {

  constructor() {
    super()

    this.state = {
      title: 'Products Page'
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