/*2. Create a Student Constructor function:
Properties: firstName:String, lastName:String, grades:Array
methods:
inputNewGrade(newGrade): push newGrade to grades
computeAverage(): return average of the grades
After you finish, create some students using the constructor function.
Then draw prototypal inheritance diagram.*/

function Student(firstName, lastName, grades){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];

}

Student.prototype.inputNewGrade=function(newGrade){
    this.grades.push(newGrade);

}

Student.prototype.computeAverage=function(){
        return this.grades.reduce((x,y)=>x+(y/this.grades.length),0);
}

const Student1=new Student("Ram","Bhandari");
Student1.inputNewGrade(56);
Student1.inputNewGrade(63);
Student1.inputNewGrade(85);
Student1.inputNewGrade(70);
console.log("The average is ", Student1.computeAverage());


const Student2=new Student("Dilip","Dahal");
Student2.inputNewGrade(66);
Student2.inputNewGrade(78);
Student2.inputNewGrade(89);
Student2.inputNewGrade(75);
console.log("The average is ", Student2.computeAverage());

const Student3=new Student("Shakti","Regmi");
Student3.inputNewGrade(88);
Student3.inputNewGrade(90);
Student3.inputNewGrade(95);
Student3.inputNewGrade(84);
console.log("The average is ", Student3.computeAverage());