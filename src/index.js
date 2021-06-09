import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    TOP
    <RangeSlider
      min={0}
      max={1000000000000}
      decimals={0}
      step={100000000000}
      width="550px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
    BOT
  </React.StrictMode>,
  document.getElementById('root')
);
