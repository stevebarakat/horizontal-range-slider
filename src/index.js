import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider
      min={0}
      max={220}
      decimals={0}
      step={20}
      width="850px"
      primaryColor="hsl(196, 100%, 48%)"
      primaryColor50="hsla(196, 100%, 48%, 0.5)"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
