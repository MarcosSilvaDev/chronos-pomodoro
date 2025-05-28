export function getNextCycle(currentCycle: number) {
  // se currentCycle for igual a 0 ou 8 retornar 1, se não adiciona mais 1
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
