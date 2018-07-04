import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 40px;
  filter: drop-shadow(0px 0px 10px black);
  &:active {
      color: black;
  }
    svg.play, svg.pause {
     font-size: 60px;
    }`;

export default function ControlButton(props) {
  const {
    type,
  } = props;
  let controlBtn = () =>  {
    switch(type) {
      case 'play':
        return 'play'
        break;
      case 'next':
        return 'forward';
        break;
      case 'prev':
        return 'backward';
        break;
      case 'pause':
        return 'pause';
        break;
      default: break;
    }
  }
  return (
    <Button
      onClick={ () =>  {
        props.controlTrack(type)} }
    >
      <FontAwesomeIcon
        className={controlBtn()}
        icon={controlBtn()}
      />
    </Button>
  );
}