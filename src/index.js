import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    TOP
    <RangeSlider
      min={235}
      max={1090}
      decimals={0}
      step={0}
      width="500px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
    BOT
  </React.StrictMode>,
  document.getElementById('root')
);
