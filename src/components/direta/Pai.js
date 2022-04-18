import React from 'react';
import Filho from './Filho';

export default props => {
  let x = 13;
  let y = 100;
  return (
    <>
      <Filho prop1={x} prop2={y} />
      <Filho prop1={x * 2} prop2={y * 5} />
    </>
  );
};
