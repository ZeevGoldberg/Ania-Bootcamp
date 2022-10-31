let name = 'Zeev'

function printName() {
    console.log(name)
}

printName()

let count = 0
function increment(){
    return count =+ 1
}

console.log(increment());

const grandName = 'Zee'

function sendMemo(){
    console.log('Hey ' + grandName + ' You left your Eggs Boiling!');
}

sendMemo()

function scratchers(a, b){
let a1 = a
let b1 = b

if (a1>b1) {
    console.log('it is now');
} else {
    console.log('it is nothing');
}}

scratchers (2, 5)
scratchers (304, 1.2)

function whatTime(tim) {
let time = tim

if (time < 12 && time != 0) {
    console.log('Good Morning mr. wood!');
} else if (time === 12) {
    console.log('it is noon mr.wood!');
} else if (time === 0){
    console.log('What the hell????');
}
else {
    console.log('It is afterNoon mr.wood!');
}}

whatTime(.5)
whatTime(13)
whatTime(0)
whatTime(12)

console.log(109857273 % 6);

let swag = 5

swag++

console.log(swag);

swag--

console.log(swag);

console.log(-swag);

console.log(+swag);

console.log(swag ** swag);

const cars = ['mazda', 'bugatti', 'chevy'];

if ((cars.includes('mazda')) && (cars.includes('bugatti'))) {
    console.log('Both cars exist in the variables');
}

if ((cars.includes('chevy')) || (cars.includes('ford'))) {
    console.log('Some cars exist in the variables');
}

if ((!cars.includes('Honda'))) {
    console.log('Nothing to see here');
}

console.log(cars.includes('toyota'));
console.log(cars.includes('mazda'));


function beers(num) {
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            console.log(i + 1 + " beer on the floor");}
        else {
            console.log(i + 1 + " beers on the floor");}
        }}

beers(7.5)

function bees(num) {
    console.log('starting counting!!!...');
    for (i = 0; i < num; i++) {
    if ((i+1) % 15 == 0) {
        console.log(i + ' buzz fizz')
    } else if ((i+1) % 5 == 0) {
        console.log(i + ' buzz');
    } else if ((i+1) % 3 == 0) {
        console.log(i + ' fizz');
    } else {
        console.log(i);
    }
    }
    }

bees (27)

let nuugs = ['bri', 'pan', 'gig', 'shon', 'mimz', 'tut','peepee', 'gihi', 'trut', 'cooch', 'becky']

for (let i = 0; i < nuugs.length; i++) {
    if (nuugs[i] == 'peepee') {
        console.log('Found it!!');
        break
} else {
    console.log('Damn...');
}
}

const user = {
    name: 'Gool',
    lastName: 'Foof',
    pets: 'Snake'
    
}




