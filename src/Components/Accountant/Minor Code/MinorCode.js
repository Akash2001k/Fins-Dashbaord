import React,{useEffect} from 'react'
import SliderAcc from '../SliderAcc'

export default function MinorCode({setStep,update}) {
  useEffect(()=>{
    update("Minor Code")
  },[])
  return (
    <div>
        <h2>Minor Code</h2>
        <SliderAcc setStep={setStep}/>
    </div>
  )
}
