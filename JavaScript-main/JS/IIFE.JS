// Immidiately invoked function expression (IIFE)
// it is used to call the function fastly 

//example 
function chai (){
   console.log("hello world");
}
chai(); // this will print hello world in console

//=+==================================================================================

//now we want that our function should call fastly so we use IIFE
(function chai (){
    console.log("king kong");
}) ();

//=+==================================================================================

( () => {
    console.log("hakunnaa matata");
}) ();

//=+==================================================================================

( (name) => {
    console.log(`hakunnaa matata ${name}`);
}) ('Priyansh Jain');

//=+==================================================================================

