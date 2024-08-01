console.log("THE SITE IS RUNNING");
console.log("ELEMENTARY MY DEAR");

//alert("Initializing . . . \nClick OK!");

//LOREM IPSUM SECTION
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
let knightClass = ["Saber", "Lancer", "Archer"];
let calvaryClass = ["Rider", "Caster", "Assassin", "Berserker"];
let servants = [...knightClass, ...calvaryClass];
console.log(knightClass);
console.log(calvaryClass);
console.log(...servants);


//REST PARAMETERS SECTION = (function(...rest)) *allows for variable number of args*
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

//ATTEMPT TO DO DICEROLLER PROGRAM HERE WITH LESS TUTORIAL...