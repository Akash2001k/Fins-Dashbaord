import React,{useEffect} from 'react'
import Slider from '../Slider/Slider'

export default function DebitNotes({setStep,update}) {
  useEffect(()=>{
    update("Debit Notes")
},[])
  return (
    <div>
      <h2>Debit Notes</h2>
      <Slider setStep={setStep}/>
    </div>
  )
}
