import React,{useEffect} from 'react'
import SliderItems from './SliderItems'

export default function PurchaseItem({setStep,update}) {
  useEffect(()=>{
    update("Purchase Item")
  },[])
  return (
    <div>
        <h2>Purchase Item</h2>
        <SliderItems setStep={setStep}/>
    </div>
  )
}
