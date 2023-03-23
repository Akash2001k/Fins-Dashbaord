import React from 'react'
import SliderItems from './SliderItems'

export default function PurchaseItem({setStep}) {
  return (
    <div>
        <h2>PurchaseItem</h2>
        <SliderItems setStep={setStep}/>
    </div>
  )
}
