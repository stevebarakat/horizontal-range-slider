import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider min={23} max={100} step={0} decimals={0} primaryColor="hsl(196, 100%, 48%)" />
  </React.StrictMode>,
  document.getElementById('root')
);
