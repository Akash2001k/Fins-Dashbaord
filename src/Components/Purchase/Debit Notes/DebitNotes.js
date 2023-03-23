import React from 'react'
import Slider from '../Slider/Slider'

export default function DebitNotes({setStep}) {
  return (
    <div>
      <h2>Debit Notes</h2>
      <Slider setStep={setStep}/>
    </div>
  )
}
