import React from 'react'
import SliderSales from '../Slider Sales/SlideSales'

export default function Customer({ setStep }) {
  return (
    <div>
      <h2>Customer</h2>
      <SliderSales setStep={setStep}/>
    </div>
  )
}
