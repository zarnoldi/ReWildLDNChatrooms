import { Chatroom } from "./chatroom.js";
import { UICtrl } from "./ui.js";
import { User } from "./user.js";


// Get UI varaibles 
const mainNav = document.getElementById('mainNav');
const addUserBtn = document.getElementById('addUserBtn'); 
const nameUser = document.getElementById('nameUser');
const passwordUser = document.getElementById('passwordUser'); 
const emailUser = document.getElementById('emailUser'); 


// Intialise event listeners 

// UI Events
mainNav.addEventListener('click', (e)=>{
    UICtrl.callSetMainSection(e.target.id);
}); 

// Form events 
addUserBtn.addEventListener('click', (e)=>{
    console.log(e);
    console.log(nameUser.value);
    console.log(passwordUser.value);
    console.log(emailUser.value);

   let user = new User(nameUser.value, passwordUser.value, emailUser.value);
   const userJSON = JSON.stringify(user); 
   console.log(userJSON);
   UICtrl.callnewUserMessage(nameUser.value); 

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
