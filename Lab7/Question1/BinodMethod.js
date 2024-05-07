/* Solution with .apply  Method*/

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }, this); // Pass 'this' as the second argument to ensure it refers to the 'group' object
    }
};

group.showList();