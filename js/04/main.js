function findFamousCats(cats) {
  let maxFollowers = 0;
  const famousCats = [];
  const getTotalFollowers = (arr) =>
    arr.reduce((accumulator, followerNum) => accumulator + followerNum, 0);
  for (let i = 0; i < cats.length; i++) {
    const totalFollowers = getTotalFollowers(cats[i].followers);
    if (totalFollowers > maxFollowers) maxFollowers = totalFollowers;
  }
  for (let i = 0; i < cats.length; i++) {
    if (getTotalFollowers(cats[i].followers) === maxFollowers)
      famousCats.push(cats[i].name);
  }
  return famousCats;
}

console.log(
  findFamousCats([
    {
      name: "Luna",
      followers: [500, 200, 300],
    },
    {
      name: "Michi",
      followers: [100, 300],
    },
  ]),
  findFamousCats([
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
  ])
);

function getStudentAverage(students) {
  const studentGrades = [];
  const classGrades = [];

  const getRoundedAverage = (arr, decimals) => {
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    const average = arrSum / arr.length;
    return parseFloat(average.toFixed(decimals));
  };

  for (let i = 0; i < students.length; i++) {
    const studentAverage = getRoundedAverage(students[i].grades, 2);
    studentGrades.push({
      name: students[i].name,
      average: studentAverage,
    });
    classGrades.push(studentAverage);
  }

  return {
    classAverage: getRoundedAverage(classGrades, 2),
    students: studentGrades,
  };
}

console.log(
  getStudentAverage([
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
);
