const users = ["ram", "Mithun", "King", "Site", "Gita"]

function checking(name) {

    if (users.includes(name)) {
        console.log("Yes,", name, " is a valid User");
    } else console.log("No,", name, "is not a vaild user.");

}


checking("Mithun");
checking("Someone")