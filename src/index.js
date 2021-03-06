import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';
import RangeSliderNew from './RangeSliderNew';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider
      initialValue={50}
      min={0}
      max={100}
      decimals={0}
      step={10}
      showTicks={true}
      snap={true}
      customLabels={[
        { 0: "low" },
        { 50: "medium" },
        { 100: "high" }
      ]}
      showLabel={true}
      prefix=""
      suffix=""
      labelRotation={0}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width={1200}
    />
    <RangeSliderNew
      initialValue={50}
      min={0}
      max={100}
      decimals={0}
      step={10}
      showTicks={true}
      snap={true}
      customLabels={[
        { 0: "low" },
        { 50: "medium" },
        { 100: "high" }
      ]}
      showLabel={true}
      prefix=""
      suffix=""
      labelRotation={0}
      primaryColor="hsl(196, 100%, 50%)"
      primaryColorLight="hsl(196, 100%, 70%)"
      width={1200}
    />

  </React.StrictMode>,
  document.getElementById('root')
);
