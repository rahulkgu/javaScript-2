const eventdate = '2024-08-31'
const todayDate = new Date()
calculateDate = () => {

    const eventDateObj = new Date(eventdate);
    let timeDifference = eventDateObj - todayDate;


    let daysDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

    console.log(daysDifference);
}
calculateDate()
    //if the given date is past than it give negative value