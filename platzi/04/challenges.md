## Encuentra a los gatitos más famosos

En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

- `name`: nombre del gatito.
- `followers`: un array de números, donde cada uno representa los seguidores de cada red social.

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```js
Input: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300],
  },
  {
    name: "Michi",
    followers: [100, 300],
  },
]);

Output: ["Luna"];
```

Ejemplo 2:

```js
Input: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70],
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200],
  },
  {
    name: "Gizmo",
    followers: [250, 750],
  },
]);

Output: ["Milo", "Gizmo"];
```

## Obtén el promedio de los estudiantes

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método `toFixed()` el cual se usa de la siguiente manera 👇

```js
const number = 100.32433;
number.toFixed(2); // "100.32"
```

> 👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

Ejemplo:

```sh

Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
```
