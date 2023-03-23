import React from 'react'
import SliderItems from './SliderItems'

export default function SalesItem({setStep}) {
  return (
    <div>
        <h2>SalesItem</h2>
        <SliderItems setStep={setStep}/>
    </div>
  )
}
