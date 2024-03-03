const students = [{
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Farman",
        marks: 99,
    },
];

function checking(studentname) {
    for (var i = 0; i < students.length; i++) {
        var currentStudent = students[i];
        var a = currentStudent.marks;
        var nam = currentStudent.name;
        if (nam == studentname) {
            break
        }
    }
    // console.log(nam)
    if (nam == studentname) {
        if (a > 90) {
            console.log("Congratulations", nam, "! You have cleared the exam.");
        } else if (a < 90) {
            console.log("Sorry, " + nam + "! You have not cleared the exam.");
        }

    }
    if (nam != studentname) {
        console.log("Invaild User!!!")

    }
}



checking("Mithun");