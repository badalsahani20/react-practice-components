import React from 'react'
import MenuList from './MenuList'
import './style.css'

const ItemTree = ({menu = []}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menu} />
    </div>
  )
}

export default ItemTree
