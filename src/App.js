import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
/* import Pai from './components/indireta/Pai'; */
/* import Pai from './components/direta/Pai'; */
/* import Aleatorio from './components/Aleatorio';
import Contador from './components/contador/ContadorV2';
import MinMax from './components/MinMax'; */
/* import Primeiro from './components/Primeiro';
import CompPadrao, { Comp1, Comp2 } from './components/Multi'; */

export default () => (
  <SafeAreaView style={style.App}>
    {/* <DigiteSeuNome /> */}
    {/* <ListaProdutosV2 /> */}
    {/* <ListaProdutos /> */}
    {/* <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
    <UsuarioLogado usuario={{ nome: 'Ana' }} />
    <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} /> */}
    {/* <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Familia> */}
    {/* <ParImpar num={3} /> */}
    {/* <Diferenciar /> */}
    {/* <Pai /> */}
    {/* <Pai /> */}
    {/* <Contador />
    <Contador inicial={100} passo={13} /> */}
    {/*     <Aleatorio min={1} max={20} />
    <Aleatorio min={1} max={6} /> */}
    {/* <MinMax min="12" max="42" /> */}
    {/*    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
