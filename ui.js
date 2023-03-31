// UI controllers
// functions that control sections of the UI

// Module pattern that takes Main Element name
// Uses Name get UI element 
// Set UI element Class to Active 
// Sets all other main section UIs to inactive
// 

export const UICtrl = (function () {

    const myRooms = document.getElementById('myRooms'); 
    const about = document.getElementById('about'); 
    const searchRooms = document.getElementById('searchRooms'); 

    const myRoomsBtn = document.getElementById('myRoomsBtn'); 
    const searchRoomsBtn = document.getElementById('searchRoomsBtn');
    const aboutBtn = document.getElementById('aboutBtn')
    

    const setMainSection = function (id) {
        const ui = [myRooms,searchRooms, about]; 
        const mainBtns = [myRoomsBtn, searchRoomsBtn, aboutBtn]

        ui.forEach((element)=>{
            element.classList.add('d-none');
        })

        mainBtns.forEach((element)=>{
            element.classList.remove('active');

        })

        switch (id) {
            case 'myRoomsBtn':
                ui[0].classList.remove('d-none');
                mainBtns[0].classList.add('active')
                console.log(ui[0]);
                break;

            case 'searchRoomsBtn':
                ui[1].classList.remove('d-none');
                mainBtns[1].classList.add('active');
                break;

            case 'aboutBtn':
                ui[2].classList.remove('d-none');
                mainBtns[2].classList.add('active');
                break;
        
            default:
                break;
        }

        // use element.id to run a switch case against each to fine the one turn on d-none

        // Loops through sections array
        // Find element that matches
        // set elememt.class to active
    }

    return {
        callChangeText: function () {
            changeText(); 
        },
        callSetMainSection: function (id) {
            setMainSection(id); 
        },
    }
})();