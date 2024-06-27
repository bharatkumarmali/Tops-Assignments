import React from 'react'
import C from '../Style/Card_Item.module.css'

function Card_Title() {
  return (
    <div className='mx-2'>
        <div className={C.categories}>
        <h1>Featured Categories</h1>
        <a href='' className='mx-4'> Cake & Milk</a>
        <a href=''className='mx-4'>Coffes & Teas</a>
        <a href=''className='mx-4'>Pet Foods</a>
        <a href=""className='mx-4'>Vegetables</a>

    </div>
    </div>
  )
}

export default Card_Title
