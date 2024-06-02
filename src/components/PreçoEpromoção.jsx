import React from 'react'
import './PreçoEpromoção.css'

const PreçoEpromoção = ({promoção, preço}) => {
  return (
    <div className='PreçoEpromoção'>
      <p className='Promoção'>{promoção}</p>
      <p className='Preço'>{preço}</p>
    </div>
  )
}

export default PreçoEpromoção