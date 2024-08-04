console.log("THE SITE IS RUNNING");
console.log("ELEMENTARY MY DEAR");

//alert("Initializing . . . \nClick OK!");

//LOREM IPSUM SECTION
console.log("LOREM IPSUM SECTION:");
let loop = 0;
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    if(loop == 0){
        document.getElementById("p1").textContent = "Hi! My Name is Jefter.";
        loop++;
        console.log(loop);
    }
    else{
        document.getElementById("p1").textContent = "Lorem ipsum dolor";
        loop--;
        console.log(loop);
    }
})


//USER INPUT SECTION
console.log("USERINPUT SECTION:");
let userName;
const header1 = document.getElementById("h1");
const btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    userName = document.getElementById("in1").value;
    if(!Boolean(userName)){
        window.alert("Please enter a username!");
        console.log(`User input: ` +Boolean(userName));
    }
    else{
        header1.textContent = `Hello, ${userName}`;
    }
}


//COUNTER SECTION
console.log("COUNTER SECTION:");
let num;
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");
const incBtn = document.getElementById("inc");
const p2 = document.getElementById("p2");
num = Number(p2.textContent);
decBtn.onclick = function() {
    /*if(num == 0){
        alert("Cannot decrease the value anymore!");
    }
    else{
        num-=1;
        p2.textContent = num;
    }*/
    (num == 0) ? alert("Cannot decrease the value anymore!") : num-=1; p2.textContent = num;
    //num-=1;
    //p2.textContent = num;
}
resBtn.onclick = function() {
    num = 0;
    p2.textContent = num;
}
incBtn.onclick = function() {
    num+=1;
    p2.textContent = num;
}

//let x = 3.49;
//console.log(Math.round(x));
//let randomNum = Math.floor(Math.random() * (10 - 5)) + 5;
//console.log(`The random number from 0 - 10 is: ${randomNum}`);

//RNG SECTION
console.log("RNG SECTION:");
const p3 = document.getElementById("p3");
const in2 = document.getElementById("in2");
const btn3 = document.getElementById("btn3");
let randomNum;
let rngInput;
btn3.onclick = function() {
    rngInput = in2.value;
    if(Boolean(rngInput) && rngInput > 1){
        randomNum = Math.floor(Math.random() * rngInput) + 1;
        p3.textContent = randomNum;
    }
    else if(rngInput == 1){
        alert("Enter a value > 1!");
    }
    else{
        alert("Enter a value!");
    }
}


//CHECKBOX AND RADIO BUTTONS SECTION
console.log("CHECKBOX & RADIO BUTTON SECTION:");
const p4 = document.getElementById("p4");
const chckBox = document.getElementById("chckBox");
const rad1 = document.getElementById("rad1");
const rad2 = document.getElementById("rad2");
const rad3 = document.getElementById("rad3");
//let test = String(p4.value);
//console.log(test.length);
chckBox.onclick = function(){
    if(loop){
        p4.textContent = "YOU'VE UNCHECKED THE BOX!";
        loop+=1;
    }
    else{
        p4.textContent = "YOU'VE CHECKED THE BOX!";
        loop-=1;
    }
    console.log(chckBox.checked);
}
rad1.onclick = function(){
    if(rad1.checked){
        p4.textContent = "BUTTON 1 IS SELECTED!";
    }
}
rad2.onclick = function(){
    if(rad2.checked){
        p4.textContent = "BUTTON 2 IS SELECTED!";
    }
}
rad3.onclick = function(){
    if(rad3.checked){
        p4.textContent = "BUTTON 3 IS SELECTED!";
    }
}


//STRING METHODS SECTION
console.log("STRING METHODS SECTION:");
let authorName = "   Jefter   "
console.log(authorName);
console.log(authorName.trim());
console.log(authorName.toUpperCase());
console.log(authorName.toLowerCase());
console.log(authorName.repeat(3));
//let result = authorName.startsWith("");
//let result = authorName.endsWith("");
let result = authorName.includes(" "); //returns boolean
console.log(`Does the string have whitespaces? ${result}`);
let newAuthorName = authorName.replaceAll(" ", "/");
console.log(newAuthorName);
let newAuthorName2 = newAuthorName.padStart(20, "-");
console.log(newAuthorName2);
let slicedString = newAuthorName2.slice(newAuthorName2.indexOf("J"));// slice(start,end)
console.log(slicedString);
let newSlicedString = slicedString.trim().charAt(0).toLowerCase();
console.log(newSlicedString);

//LOOPS SECTION
/*let setName ="";
while(setName === ""){
    setName = window.prompt("Enter name:");
}
header1.textContent = setName;*/


//NUMBER GUESSING SECTION
console.log("NUMBER GUESSING GAME SECTION:");
const MIN = 1;
const MAX = 100;
let answer = Math.floor(Math.random() * (MAX - MIN + 1));
console.log(answer);
let attempts = 0;
let guess;
const ans = document.getElementById("in3");
const btn4 = document.getElementById("btn4");
labelText = document.getElementById("lbl1");
btn4.onclick = function(){
    guess = Number(ans.value);
    console.log(typeof guess);
    if(guess > MAX || guess < MIN){
        alert("INPUT IS OUT OF BOUNDS!");
        ans.value = "";
    }
    if(guess > answer){
        labelText.textContent = `YOUR GUESS IS HIGHER THAN THE HIDDEN NUMBER.ATTEMPTS: ${attempts+1}`;
        attempts+=1;
    }
    else if (guess < answer){
        labelText.textContent = `YOUR GUESS IS LOWER THAN THE HIDDEN NUMBER.\nATTEMPTS: ${attempts+1}`;
        attempts+=1;
    }
    else{
        labelText.textContent = `YOU'VE GUESSED THE NUMBER!\nATTEMPTS: ${attempts}`;
        ans.disabled = true;
    }
}
const btn5 = document.getElementById("btn5");
function iGotClicked(){
    attempts = 0;
    ans.disabled = false;
    ans.value = "";
    guess = 0;
    answer = Math.floor(Math.random() * (MAX - MIN + 1));
    console.log(answer);
    labelText.textContent = "NUMBER GUESSING GAME FROM 1 - 100:"
}
//btn5.onclick = iGotClicked;


//SPREAD OPERATORS SECTION = (...)
console.log("SPREAD OPERATORS SECTION:");
let knightClass = ["Saber", "Lancer", "Archer"];
let calvaryClass = ["Rider", "Caster", "Assassin", "Berserker"];
let servants = [...knightClass, ...calvaryClass];
console.log(knightClass);
console.log(calvaryClass);
console.log(...servants);


//REST PARAMETERS SECTION = (function(...rest)) *allows for variable number of args*
console.log("REST PARAMETERS SECTION:");
function cabinet(...tools){
    console.log(...tools);
    console.log(tools.length);
}
const tool1 = "hammer";
const tool2 = "screwdriver";
const tool3 = "drill";
const tool4 = "measuringTape";
const tool5 = "flashlight";
cabinet(tool1, tool2, tool3, tool4, tool5);

let sum = 0;
function getSum(...nums){
    for(let num of nums){
        sum += num;
    }
    return sum / nums.length;
}
let avg = getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Sum is: ${sum}`);
console.log(`Avg is: ${avg}`);

//DICE ROLLER SECTION
console.log("DICE ROLL SECTION:");
const lowestDice = 1;
const highestDice = 6;
const btn6 = document.getElementById("btn6");
const numInput = document.getElementById("diceInput");
const diceImage = document.getElementById("diceImg");
const diceTxt = document.getElementById("diceTxt");
btn6.onclick = function(){
    let numOfDice = Number(numInput.value);
    let diceRolls = [];
    let diceImages = [];
    if(numOfDice <= 0){
        alert("Enter a valid number of dice/s!");
        return;
    }
    console.log(`Number of dice/s roled: ${numOfDice}`);

    for(let i = 0; i < numOfDice; i++){
        diceRolls[i] = Math.floor(Math.random() * 6) + 1;
        diceImages[i] = `<img src="images/${diceRolls[i]}.png" alt="Dice: ${diceRolls[i]}">\n`;
    }
    diceTxt.innerHTML = diceRolls.join(' ');
    diceImage.innerHTML = diceImages.join('');
    console.log(diceRolls);
}

//RANDOM PASSWORD GENERATOR SECTION
console.log("RANDOM PASSWORD GENERATOR SECTION:");
const pLength = document.getElementById("passLength");
const btn7 = document.getElementById("btn7");
const displayPass = document.getElementById("displayPass");
const cb1 = document.getElementById("incUp");
const cb2 = document.getElementById("incLow");
const cb3 = document.getElementById("incNum");
const cb4 = document.getElementById("incSpe");

let length = 0;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = upperCase.toLowerCase();
let pNumbers = "1234567890";
let specialChars = "!@#$%^&*()_+-=";
let allowedChars = "";
let generatedPass = "";

btn7.onclick = function(){
    length = pLength.value;
    if(length <= 0 || length < 8){
        return alert("Please enter a value greater than 8!");
    }

    allowedChars += cb1.checked ? upperCase : "";
    allowedChars += cb2.checked ? lowerCase : "";
    allowedChars += cb3.checked ? pNumbers : "";
    allowedChars += cb4.checked ? specialChars : "";

    for(let i = 0; i <= length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPass += allowedChars[randomIndex];
    }
    (allowedChars == "") ? alert("Please select an option!") : displayPass.textContent = `Your generated password is: ${generatedPass}`;
    generatedPass = "";
    allowedChars = "";
}

//FOREACH SECTION
console.log("FOREACH SECTION:");
let arr = [1, 2, 3, 4, 5];
arr.forEach(double);
arr.forEach(displayConsole);
function double(element, index, array){
    //a[i] = e * 2;
    array[index] *= 2;
}
function displayConsole(callback){
    console.log(callback);
}


//IMPLEMENT QUICKSORT ALGORITHM BASED ON USER INPUT SECTION.
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const userInput = document.getElementById("userInput");
const displaySorted = document.getElementById("displaySorted");
const userInputDisplay = document.getElementById("userInputDisplay");

let toSort = [];
const start = 0;
let end = 0;

userInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        btn8.click();
    }
})
btn8.onclick = function(){
    if(userInput.value == ""){
        alert("You must enter a number!");
        return;
    }
    toSort.push(Number(userInput.value));
    end = toSort.length - 1;
    userInputDisplay.textContent = `You've entered: ${toSort.toString().replaceAll(",", " ")}`;
    userInput.value = "";
    console.log(toSort);
}
btn9.onclick = function(){
    quickSort(toSort, start, end);
    displaySorted.textContent = `Sorted inputs: ${toSort.toString().replaceAll(",", " ").trim()}`;
}
btn10.onclick = function(){
    userInput.value = "";
    userInputDisplay.textContent = "";
    displaySorted.textContent = "";
    toSort = [];
    end = 0;
}
//QUICKSORT ALGORITHM
function quickSort(arr, start, end){
    if(end <= start) return;

    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}
function partition(arr, start, end){
    let pivot = arr[end];
    let i = start - 1;
    let temp = 0;
    for(let j = start; j < end; j++){
        if(arr[j] < pivot){
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    i++;
    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    return i;
}


//CALLBACKS AND OTHER METHODS THAT INVOLVES CALLBACKS SECTION
console.log("CALLBACKS SECTION:");
//FILTER METHOD.
const ages = [23, 13, 15, 18, 20];
//THIS USES FUNCTION EXPRESSION AS THE PARAMETER FOR THE .FILTER() METHOD.
/*const adults = ages.filter(function(element, index){
    console.log(`current index: ${index}`);
    return element >= 18;
})*/
//THIS USES AN ARROW FUNCTION AS THE PARAMETER FOR THE .FILTER() METHOD.
const adults = ages.filter((elements) => {
    return elements >= 18;
})
console.log(adults.toString());

//MAP METHOD.
const letters = ["d", "a", "e", "b", "c"];
const displayLetters = letters.map(display);
function display(elements){
    const caps = elements.toUpperCase();
    console.log(caps);
}

//REDUCE METHOD.
const scores = [13, 10, 25, 20, 17];
const toSum = scores.reduce((accumulator, elements) => {
    return Math.max(accumulator, elements);
})
console.log(toSum);


//OBJECTS
console.log("OBJECTS SECTION:");
const hsrChar = {
    name: "Acheron",
    trueName: "Raiden Bosenmori Mei",
    path: "Nihility",
    level: 80,
    faction: "Self Annihilator",
    aeon: "IX",
    skill: "Octobolt Flash!",
    ultimate: "Slashed Dream Cries in Red",
    useSkill: function(targets) {console.log(`${this.name} has used her skill ${this.skill} against ${targets} targets!`)},
    useUltimate: function(targets) {console.log(`${this.name} activated her ultimate skill, ${this.ultimate} to kill ${targets}.`)}
}
hsrChar.useSkill(3);
hsrChar.useUltimate(5);


//CONSTRUCTORS
console.log("CONSTRUCTORS SECTION:");
function Vehicle(type, brand, wheels, year, color){
    this.type = type,
    this.brand = brand,
    this.wheels = wheels,
    this.color = color
}
const bicycle = new Vehicle("2-Wheeler", "Santa Fe", 2, 2024, "White");
const car = new Vehicle("Sedan", "Honda", 4, 2023, "Red");
console.log(car);
console.log(bicycle);


//CLASSES
console.log("CLASSES SECTION:");
class Item{
    constructor(name, rarity){
        this.name = name,
        this.rarity = rarity
    }

    displayItem(){
        console.log(`The item you have is: ${this.name}.\nIt has a ${this.rarity}-star rarity.`);
    }
}
const sword = new Item("Necrotic Sword of Doom", 5);
const axe = new Item("Blinding Light of Destiny", 5);
axe.displayItem();
sword.displayItem();


//INHERITANCE AND CONSTRUCTORS
console.log("INHERITANCE AND CONSTRUCTORS SECTION:");
class Planets{
    constructor(isGas, placement){
        this.isGas = isGas,
        this.placement = placement
    }
    temps(temps){
        console.log(`This planet's average temperature is ${temps}°C.`)
    }
}
class Earth extends Planets{
    constructor(isGas, temps, placement){
        super(isGas, placement),
        this.temps = temps
    }
    rotation(){
        super.temps(this.temps);
    }
}
class Jupiter extends Planets{
    constructor(isGas, temps, placement){
        super(isGas, placement),
        this.temps = temps
    }
    rotation(){
        super.temps(this.temps);
    }
}
const earth = new Earth(false, 27, "third");
console.log(`Is the planet a gas planet? ${earth.isGas}`);
console.log(`This planet is the ${earth.placement} planet from the Sun.`);
earth.rotation();
const jupiter = new Jupiter(true, -110, "fifth");
console.log(`Is the planet a gas planet? ${jupiter.isGas}`);
console.log(`This planet is the ${jupiter.placement} planet from the Sun.`);
jupiter.rotation();