import React from 'react'
import Slider from './Slider'

export default function CreditNotes({setStep}) {
  return (
    <div>
      <h2>CreditNotes</h2>
      <Slider setStep={setStep}/>
    </div>
  )
}
