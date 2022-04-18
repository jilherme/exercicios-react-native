import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default ({ prop1, prop2 }) => {
  return (
    <>
      <Text style={Estilo.txtG}>{prop1}</Text>
      <Text style={Estilo.txtG}>{prop2}</Text>
    </>
  );
};
