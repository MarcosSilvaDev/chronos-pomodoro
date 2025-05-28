export function formatSecondsToMinutes(seconds: number) {
  //converte segundos em minutos
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  // pega o resto dos segundos
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutes}:${secondsMod}`;
}
