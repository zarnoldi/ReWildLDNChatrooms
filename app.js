import { Chatroom } from "./chatroom.js";
import { UICtrl } from "./ui.js";


const chatroom1 = new Chatroom('chatroom1', 'Tom A', '30/03/2023'); 

console.log(chatroom1);
// Get UI varaibles 
const myRoomsBtn = document.getElementById('myRoomsBtn'); 
const mainNav = document.getElementById('mainNav');


// Intialise event listeners 

mainNav.addEventListener('click', (e)=>{
    UICtrl.callSetMainSection(e.target.id);
    console.log(e.target.id);
}); 


// EL Search
// Take in Parameters 
// Make GET API call with Parameters 
// Response get data
// Display Data 

// EL Main navigation 
// Call UI controller

// EL Navbar navigation 
// Call UI controller

// EL Create new Chatroom 

// EL Create new User 

// EL Add user to Chatroom 

// EL Open Chatroom 
