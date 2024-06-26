/**
 * Contagem de vales em uma caminhada
 *
 * Principais conceitos:
 * 1. Rastreamento de estado (nível do mar)
 * 2. Uso de condicionais para detectar eventos (saída de um vale)
 * 3. Contadores para registrar eventos (número de vales)
 *
 * @param {number} steps - Número de passos dados na caminhada
 * @param {string} path - Caminho da caminhada composto por 'U' (subida) e 'D' (descida)
 * @returns {number} - Número de vales atravessados
 */

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps,
// for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at
// sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea l
// evel and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down
// from sea level and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
// Example
// steps = 8 path = [DDUUUUDD]

// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high.
// Finally, the hiker returns to sea level and ends the hike.

function countingValleys(steps, path) {
  let valley = 0; // Contador de vales
  let seaLevel = 0; // Nível atual em relação ao nível do mar

  // Percorrer cada passo na caminhada
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel++; // Subiu um nível
      if (seaLevel === 0) {
        valley++; // Saiu de um vale
      }
    } else if (path[i] === "D") {
      seaLevel--; // Desceu um nível
    }
  }

  return valley; // Retorna o número de vales atravessados
}

const steps = 8;
const path = "UDDDUDUU";
// _/\      _
//    \    /
//     \/\/
console.log(countingValleys(steps, path));
