var random = Math.floor(Math.random() * 5);

console.log(random)

var person = () => {

}

var btn = document.querySelector('button.test');

btn.onclick = () => {
    confirm('You are going to a non-functional webpage. Continue?');
}

var btn2 = document.querySelector('button.test2');

btn2.onclick = () => {
    confirm('The QR codes are not aligned. I had to type this so you would not be disturbed. Continue?');
}

var person = {
    "your name": "John",
    "heads": 1,
    "bodies": 1,
    "arms": 2,
    "legs": 2,
};

function checkUp(person) {
    console.log('Your name is' + ' ' + person["your name"])
    console.log('You have' + ' ' + person.heads + ' ' + "head(s)")
    console.log('You have' + ' ' + person.bodies + ' ' + "body(bodies)")
    console.log('You have' + ' ' + person.arms + ' ' + "arm(s)")
    console.log('You have' + ' ' + person.legs + ' ' + "leg(s)")
    if (person.heads == 1, person.bodies == 1, person.arms == 2, person.legs == 2) {
        console.log('All good!')
    }
}

var doctor_appointment = document.querySelector('button.doctor_checkup')

doctor_appointment.onclick = () => {
    var random = Math.floor(Math.random() * 5);
    if (random >= 2)
    alert('All good!')
    if (random <= 1)
    alert('You are sick!')
}