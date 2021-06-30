import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider
      min={0}
      max={100}
      decimals={0}
      step={10}
      ticks={true}
      tickLabel={true}
      labelRotate={14}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width={543}
    />
    {/* <RangeSlider
      min={0}
      max={100}
      decimals={0}
      step="10"
      ticks={true}
      tickLabel={true}
      labelRotate={14}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width="637"
    />
    <RangeSlider
      min={0}
      max={100}
      decimals={0}
      step="10"
      ticks={true}
      tickLabel={true}
      labelRotate={14}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width="637"
    />
    <RangeSlider
      min={0}
      max={100}
      decimals={0}
      step="10"
      ticks={true}
      tickLabel={true}
      labelRotate={14}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width="637"
    /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
