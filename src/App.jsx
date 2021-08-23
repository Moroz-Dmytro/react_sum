import React from 'react';
import './App.scss';
import { Sum } from './components/Sum'

const App = () => (
  <>
    <Sum x = {2} y = {3} />
    <Sum x = {-5} y = {5} />
    <Sum x = {10} />
    <Sum y = {5}/>
    <Sum />
  </>
);

export default App;
