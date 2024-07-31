console.log("THE SITE IS RUNNING");
console.log("ELEMENTARY MY DEAR");

alert("Initializing . . . \nClick OK!");

//LOREM IPSUM SECTION
let loop = 0;
document.getElementById("btn1").addEventListener("click", function(){
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
document.getElementById("btn2").onclick = function(){
    userName = document.getElementById("in1").value;
    if(!Boolean(userName)){
        window.alert("Please enter a username!");
        console.log(`User input: ` +Boolean(userName));
    }
    else{
        document.getElementById("h1").textContent = `Hello, ${userName}`;
    }
}

//COUNTER SECTION
let num;
num = Number(document.getElementById("p2").textContent);
console.log(typeof num);

document.getElementById("dec").onclick = function() {
    if(num == 0){
        alert("Cannot decrease the value anymore!");
        return;
    }
    else{
        num-=1;
        document.getElementById("p2").textContent = num;
    }
    //num-=1;
    //document.getElementById("p2").textContent = num;
}
document.getElementById("res").onclick = function() {
    num = 0;
    document.getElementById("p2").textContent = num;
}
document.getElementById("inc").onclick = function() {
    num+=1;
    document.getElementById("p2").textContent = num;
}