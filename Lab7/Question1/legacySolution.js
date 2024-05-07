let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let groupthis=this;
        this.students.forEach((student) => {
            console.log(groupthis.title + ": " + student);
        });
    }
};

group.showList();
