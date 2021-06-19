import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider
      min={1}
      max={11}
      decimals={0}
      step={1}
      width="1500px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
    <RangeSlider
      min={2}
      max={222}
      decimals={0}
      step={11}
      width="500px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
    <RangeSlider
      min={3}
      max={3333}
      decimals={2}
      step={333}
      width="500px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
    <RangeSlider
      min={0}
      max={1500}
      decimals={0}
      step={30}
      width="500px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
