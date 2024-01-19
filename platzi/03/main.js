function isLeapYear(year) {
  if (year < 0 || year % 1 !== 0) return false;
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
}

console.log(isLeapYear(2000), isLeapYear(-2024), isLeapYear(1984.25));

function getPetExerciseInfo(type, age) {
  type = type.toLowerCase();
  switch (type) {
    case "perro":
      if (age < 1) {
        return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
      } else if (age > 7) {
        return "Los perros viejos necesitan caminatas más cortas";
      } else {
        return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
      }
    case "gato":
      if (age < 1) {
        return "Los gatitos necesitan frecuentes sesiones de juego";
      } else if (age > 7) {
        return "Los gatos viejos necesitan sesiones de juego más cortas";
      } else {
        return "Los gatos a esta edad necesitan jugar diariamente";
      }
    case "ave":
      if (age < 1) {
        return "Las aves jóvenes necesitan mucho espacio para volar";
      } else if (age > 7) {
        return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
      } else {
        return "Las aves necesitan jugar diariamente y un lugar para volar";
      }

    default:
      return "Tipo de mascota inválida";
  }
}

console.log(
  getPetExerciseInfo("perro", 3),
  getPetExerciseInfo("gato", 8),
  getPetExerciseInfo("Mamut", 25)
);

function printTriangle(size, character) {
  let triangle = "";
  for (let i = 1; i <= size; i++) {
    const blankSpace = `${" ".repeat(size - i)}`;
    const triangleFill = `${character.repeat(i)}`;
    triangle += `${blankSpace}${triangleFill}`;
    if (i < size) triangle += "\n";
  }
  return triangle;
}

console.log(`${printTriangle(5, "*")}\n\n${printTriangle(6, "$")}`);
