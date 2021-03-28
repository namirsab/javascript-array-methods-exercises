const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below
const gradesLowerThan3 = grades.filter((grade) => grade < 3);
const gradesGreaterOrEqual3 = grades.filter((grade) => grade >= 3);

console.log(gradesLowerThan3);
console.log(gradesGreaterOrEqual3);
