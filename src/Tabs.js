import { useState } from "react";
import './App.css';

export default function Tabs(props){
   let arr=props.Tabs;
  const[currIndex,setCurrIndex]=useState(0); // to hold current tab 
  console.log(props);
  function handleClick(k){
  setCurrIndex(k);
  }
  return <div className="parent">
    <h1>Custome Tabs</h1>
    <div className="tabs-container">
    {
       
        arr.map((tab,key)=>
        <div className={`tabs ${currIndex===key?"active":""}`}>
        <div className="tab" onClick={()=>handleClick(key)}><span>{tab.label}</span></div>
        </div>)  
    }</div>
    <h2>{arr[currIndex].content}</h2>

  </div> 
}