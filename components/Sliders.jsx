import React from 'react'
import FadeSlider from './sliders/FadeSlider'
import Slider1 from './sliders/Slider1'

const Sliders = () => {
  return (
    <div className="flex flex-col mt-24 gap-5">
      <h1 className="text-3xl mb-2 text-center">Sliders</h1>
      <FadeSlider></FadeSlider>
      <Slider1></Slider1>
    </div>
  );
}

export default Sliders
