import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const Aleatorio = ({ min, max }) => {
  const delta = max - min + 1;
  const numeroAleatorio = Math.floor(Math.random() * delta) + min;
  return (
    <SafeAreaView>
      <Text style={style.normalText}>
        O número aleatório entre {min} e {max} foi:
        <Text style={style.boldText}> {numeroAleatorio}</Text>
      </Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  normalText: {
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'red',
  },
});

export default Aleatorio;
