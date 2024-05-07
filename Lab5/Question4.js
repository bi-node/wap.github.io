const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];
  
  // const averageGrades = students
  //   .filter(student => student.courses.includes('cs303'))
  //   .reduce((result, student) => {
  //     const avgGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  //     return { ...result, [student.name]: avgGrade };
  //   }, {});
  
  // console.log(averageGrades);
//other way
const avg = students
  .filter(student => student.courses.includes('cs303')) // Filter students enrolled in CS303
  .reduce((accum, current) => {
    const { name, grades } = current;
   
    // Calculate average grade
    const averageGrade = grades.reduce((ave, g, index, array) => ave + g / array.length, 0);
    // Store the average grade corresponding to the student's name
    accum[name] = averageGrade;
    return accum;
  }, {});

console.log(avg);
  
  