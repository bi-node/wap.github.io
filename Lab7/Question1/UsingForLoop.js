let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        for (let i = 0; i < this.students.length; i++) {
            console.log(this.title + ": " + this.students[i]);
        }
    }
};

group.showList();