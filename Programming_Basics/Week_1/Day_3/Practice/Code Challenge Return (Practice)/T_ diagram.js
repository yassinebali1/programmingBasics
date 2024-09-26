//Code Snippet 1:

function hello() {
    console.log('hello'); //afficher hello
}
hello(); // is called
console.log('Dojo'); // afficher dojo

//Code Snippet 2:

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result); // afficher "result is 15 "



//Code Snippet 3:

function numPlus(num) {
    console.log('num is', num); // numPlus(3) num=3
    return num+15;
}
var result = numPlus(3); 
console.log('result is', result); //afficher result is 18


