import React from 'react';
import { Button } from 'react-native';

export default ({ min, max, funcao }) => {
  function gerarValor(min, max) {
    const fator = max - min;
    const aleatorio = parseInt(Math.random() * fator) + min;
    return aleatorio;
  }

  return (
    <Button
      title="Executar"
      onPress={function () {
        const n = gerarValor(min, max);
        funcao(n, 'Valor é: ');
      }}
    />
  );
};
