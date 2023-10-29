function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        height: 170,
        weight: 70,
        skills: ["JavaScript", "HTML", "CSS", "NodeJS", "ReactJS"],
        salary: 2000,
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (newSalary) {
            this.salary = newSalary;
        },
        getAge: function () {
            return this.age;
        },
        setAge: function (newAge) {
            this.age = newAge;
        },
        getSkills: function () {
            return this.skills;
        },
        setSkills: function (newSkills) {
            this.skills = newSkills;
        }
    };
    return member;
}