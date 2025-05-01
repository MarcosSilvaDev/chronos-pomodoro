import { createContext } from 'react';

export const TaskContext = createContext({
  // valor inicial caso não use o provider
  chave: 123,
});

// para ter um contexto precisa:
/*
  1. criar um contexto
  2. esse contexto precisa de um valor inicial e só sera usado se não usar o
  provider
  3. sempre iremos usar o provider
  4. o valor importante é o que vai no "value" do provider
*/
