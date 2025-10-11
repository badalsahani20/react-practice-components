import React, { useState } from 'react'
import Model from './Model';
import './model.css';

const ModelTest = () => {
  const [showModel, setShowModel] = useState(false);
  function handleToggleModel() {
    setShowModel(!showModel);
  }

  function onClose() {
    setShowModel(false);
  }
   return (
    <div className='model-test-container'>
        <button className='model-toggle' onClick={handleToggleModel}>Open Model</button>
        {
          showModel && <Model onClose={onClose} 
          body={<div>Customized body</div>}
          header={"Customized Header"} 
          footer={"Customized Footer"}/>
        }
    </div>
  )
}

export default ModelTest