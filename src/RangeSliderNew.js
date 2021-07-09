import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const RangeSlider = ({
  initialValue,
  min,
  max,
  decimals,
  step,
  showTicks,
  snap,
  customLabels,
  showLabel,
  prefix,
  suffix,
  labelRotation,
  primaryColorLight,
  primaryColor,
  width
}) => {
  const rangeEl = useRef(null);
  const [value, setValue] = useState(initialValue);
  const [newValue, setNewValue] = useState(null);
  const factor = (max - min) / 10;
  const newPosition = 10 - newValue * 0.2;
  const focusColor = primaryColor;
  const blurColor = primaryColorLight;

  useEffect(() => {
    setNewValue(Number(((value - min) * 100) / (max - min)));
  }, [value, min, max]);

  let markers = [];

  if (customLabels.length !== 0) {
    if (step > 0) {
      for (let i = min; i <= max; i += parseInt(step, 10)) {
        let customTickText = null;
        let tickText = numberWithCommas(i.toFixed(decimals));
        let labelLength = tickText.toString().length;
        customLabels.map(label => {
          if (parseInt(tickText, 10) === parseInt(Object.keys(label), 10)) {
            customTickText = Object.values(label);
          }
          return null;
        });
        if (customTickText !== null) labelLength = customTickText[0].length;
        markers.push(
          <Tick
            key={i}
            length={labelLength}
            showLabel={showLabel}
            labelRotation={parseInt(labelRotation, 10)}
          >
            {showLabel && <div>{customTickText}</div>}
          </Tick>
        );
      }
    }
  } else {
    if (step > 0) {
      for (let i = min; i <= max; i += parseInt(step, 10)) {
        let tickText = prefix + numberWithCommas(i.toFixed(decimals)) + suffix;
        const labelLength = tickText.toString().length;
        markers.push(
          Tick && <Tick
            key={i}
            length={labelLength}
            labelRotation={parseInt(labelRotation, 10)}
          >
            {showLabel && <div>{tickText}</div>}
          </Tick>
        );
      }
    }
  }

  const marks = markers.map(marker => marker);

  function handleKeyPress(e) {
    // Check if modifier key is pressed
    const cmd = e.metaKey;
    const ctrl = e.ctrlKey;

    switch (e.keyCode) {
      case 27: //Esc
        // rangeEl.current.blur();
        return;
      case 37: //Left
        (cmd || ctrl) && setValue(value - factor);
        return;
      case 40: //Down
        (cmd || ctrl) && setValue(value - factor);
        return;
      case 38: //Up
        (cmd || ctrl) && setValue(value >= max ? max : value + factor);
        return;
      case 39: //Right
        (cmd || ctrl) && setValue(value >= max ? max : value + factor);
        return;
      default:
        return;
    }
  }
  return (
    <RangeWrap style={{ width: width }}>

      <StyledRangeSlider
        tabIndex="0"
        ref={rangeEl}
        min={min}
        max={max}
        step={snap ? parseInt(step, 10) : parseInt(0, 10)}
        value={value > max ? max : value.toFixed(decimals)}
        onInput={(e) => {
          rangeEl.current.focus();
          setValue(e.target.valueAsNumber);
        }}
        onKeyDown={handleKeyPress}
        style={{
          "--focusColor": focusColor,
          "--blurColor": blurColor,
        }}
      />
      <Progress
        style={{
          "--newValue": newValue + "%", "--newPosition": newPosition,
          "--focusColor": focusColor,
          "--blurColor": blurColor,
        }} />
      <RangeOutput
        style={{
          left: `calc(${newValue}% + ${newPosition * 2}px)`,
          "--focusColor": focusColor,
        }}>
        <span>{prefix + numberWithCommas(value.toFixed(decimals)) + suffix}</span>
      </RangeOutput>
      {showTicks ? <Ticks>{marks}</Ticks> : null}
    </RangeWrap>
  );
};

export default RangeSlider;


// PROPTYPES

RangeSlider.propTypes = {
  /**
    The initial value.
  */
  initialValue: PropTypes.number.isRequired,
  /**
    The minimum value.
  */
  min: PropTypes.number.isRequired,
  /**
    The maximum value. 
  */
  max: PropTypes.number.isRequired,
  /**
    The amount of decimal points to be rounded to. 
  */
  decimals: PropTypes.number,
  /**
    The invterval between ticks.
  */
  step: PropTypes.number,
  /**
    Show or hide tick  marks.
  */
  showTicks: PropTypes.bool,
  /**
    Snap to ticks or scroll smoothly.
  */
  snap: PropTypes.bool,
  /**
    For creating custom labels. 
  */
  customLabels: PropTypes.arrayOf(PropTypes.object),
  /**
    Show or hide labels.
  */
  showLabel: PropTypes.bool,
  /**
    Optional text displayed before value. 
  */
  prefix: PropTypes.string,
  /**
    Optional text displayed after value.
  */
  suffix: PropTypes.string,
  /**
    The amount in degrees to rotate the labels.
  */
  labelRotation: PropTypes.number,
  /**
    The focus color. 
  */
  primaryColorLight: PropTypes.string,
  /**
    The blur color. 
  */
  primaryColor: PropTypes.string,
  /**
    The width of the range slider.
  */
  width: PropTypes.number,
};

// Styles

const whiteColor = "white";
const blackColor = "#999";

const RangeWrap = styled.div`
  border: 1px dotted red;
  position: relative;
  padding-top: 3.75rem;
  font-family: sans-serif;
  max-width: 100%;
  user-select: none;
`;

const StyledRangeSlider = styled.input.attrs({ type: "range" })`
  appearance: none;
  cursor: pointer;
  margin: 0;
  width: 100%;
  height: 15px;
  border-radius: 15px;
  border: 0;
  position: absolute;
  z-index: 2;
  background: transparent;
  &:focus {
    outline: none;
  }

    &::-webkit-slider-thumb {
      position: relative;
      height: 3em;
      width: 3em;
      border: 1px solid ${blackColor};
      border-radius: 50%;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
      cursor: grab;
      -webkit-appearance: none;
      z-index: 50;
      background: -webkit-radial-gradient(center, ellipse cover,  var(--focusColor) 0%, var(--focusColor) 35%, ${whiteColor} 40%, ${whiteColor} 100%);
    };
    &:focus::-webkit-slider-thumb{
      background: -webkit-radial-gradient(center, ellipse cover,  ${whiteColor} 0%,${whiteColor} 35%,var(--focusColor) 40%,var(--focusColor) 100%);
    }
    &::-moz-range-thumb {
      position: relative;
      height: 3em;
      width: 3em;
      border: 1px solid ${blackColor};
      border-radius: 50%;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
      cursor: grab;
      appearance: none;
      margin-top: -10px;
      z-index: 50;
      background: -webkit-radial-gradient(center, ellipse cover,  var(--focusColor) 0%, var(--focusColor) 35%, ${whiteColor} 40%, ${whiteColor} 100%);
      :focus{
        background: -webkit-radial-gradient(center, ellipse cover,  ${whiteColor} 0%,${whiteColor} 35%,var(--focusColor) 40%,var(--focusColor) 100%);
      }
  };
`;


const Progress = styled.div`
  position: absolute;
  border-radius: 15px;
  box-shadow: inset 1px 1px 2px hsla(0, 0%, 0%, 0.25),
    inset 0px 0px 2px hsla(0, 0%, 0%, 0.25);
  height: 15px;
  width: 100%;
  cursor: pointer;
  z-index: 0;
  background: -webkit-linear-gradient(left, var(--blurColor) 0%, var(--blurColor) var(--newValue), ${whiteColor} var(--newValue), transparent 100%);
  ${StyledRangeSlider}:focus + & {
    background: -webkit-linear-gradient(left, var(--focusColor) 0%, var(--focusColor) var(--newValue), ${whiteColor} var(--newValue), transparent 100%);
  }
`;


const RangeOutput = styled.output`
  margin-top: -3.75rem;
  width: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  span{
    background: ${whiteColor};
    border: 1px solid ${blackColor};
    border-radius: 5px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
    padding: 0.5rem 0.75rem;
    color: ${blackColor};
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      top: 100%;
      left: 50%;
      margin-left: -6px;
      margin-top: -1px;
      ${StyledRangeSlider}:focus + ${Progress} + & {
        border-top: 12px solid var(--focusColor);
      }
    }
    ${StyledRangeSlider}:focus + ${Progress} + & {
      border: 1px solid var(--focusColor);
      background: var(--focusColor);
      color: ${whiteColor};
    }
  }
`;

const Ticks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${1.25 + "rem"};
  margin-left: ${1.25 + "rem"};
  margin-bottom: -2rem;
`;
const Tick = styled.div`
  position: relative;
  width: 1px;
  height: 5px;
  background: ${blackColor};
  margin-top: 2rem;
  margin-bottom: ${p => (p.length) + "ch"};
    div{
      width: 0;
      color: ${blackColor};
      transform-origin: top center;
      margin-top: 0.5rem;
      margin-left: ${p => p.labelRotation < 15 ? p.length / 2 * -1 + "ch" : "0.5rem"};
      transform: ${p => `rotate(${p.labelRotation}deg)`};
      white-space: nowrap;
    }
`;
