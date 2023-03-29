// UI controllers
// functions that control sections of the UI

// Module pattern that takes Main Element name
// Uses Name get UI element 
// Set UI element Class to Active 
// Sets all other main section UIs to inactive
// 

const UICtrl = (function () {

    let text = 'this is text'; 

    const changeText = function () {
        const element = document.querySelector('h1'); 
        element.textContent = text; 
    }

    const setMainSection = function (element) {
        console.log(element);
        // get Main Section elements a variables
        // set all section.class d-none
        // use element.id to run a switch case against each to fine the one turn on d-none
        switch (element.id) {
            case 'about':
            // Remove d-none class
                break;

            case 'myRooms':
            // Remove d-none class
                break;

            case 'searchRooms':
            // Remove d-none class
                break;
        
            default:
                break;
        }
        // Loops through sections array
        // Find element that matches
        // set elememt.class to active
        
    }

    return {
        callChangeText: function () {
            changeText(); 
        },
        displayInConsole: function (data) {
            console.log(data);
        }
    }
})();