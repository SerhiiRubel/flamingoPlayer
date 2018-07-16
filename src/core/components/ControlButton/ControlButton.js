import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 40px;
  &:active {
      color: black;
  }
  svg.play, svg.pause {
    font-size: 60px;
  }`;

export default function ControlButton(props) {
  const {
    type,
    id,
    controlTrack
  } = props;
  return (
    <Button
      onClick={ (e) =>  {
        controlTrack(e, type, id)} }
    >
      <FontAwesomeIcon
        className={`shadow ${type}`}
        icon={type}
      />
    </Button>
  );
}