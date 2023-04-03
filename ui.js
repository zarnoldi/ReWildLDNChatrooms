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
    const newChatroom = document.getElementById('newChatroom');
    const newUser = document.getElementById('newUser');
    
    const myRoomsBtn = document.getElementById('myRoomsBtn'); 
    const searchRoomsBtn = document.getElementById('searchRoomsBtn');
    const aboutBtn = document.getElementById('aboutBtn')
    const newChatroomBtn = document.getElementById('newChatroomBtn'); 
    const newUserBtn = document.getElementById('newUserBtn'); 
    

    const setMainSection = function (id) {
        const ui = [myRooms, searchRooms, newChatroom, about, newUser]; 
        const mainBtns = [myRoomsBtn, searchRoomsBtn, newChatroomBtn,  aboutBtn, newUserBtn];

        ui.forEach((element)=>{
            element.classList.add('d-none');
        })

        mainBtns.forEach((element)=>{
            element.classList.remove('active');

        })

        switch (id) {
            case myRoomsBtn.id:
                ui[0].classList.remove('d-none');
                mainBtns[0].classList.add('active');
                console.log(ui[0]);
                break;

            case searchRoomsBtn.id:
                ui[1].classList.remove('d-none');
                mainBtns[1].classList.add('active');
                break;

            case newChatroomBtn.id:
                ui[2].classList.remove('d-none');
                mainBtns[2].classList.add('active');
                break;

            case aboutBtn.id:
                ui[3].classList.remove('d-none');
                mainBtns[3].classList.add('active');
                break;

                case newUserBtn.id:
                    ui[4].classList.remove('d-none');
                    mainBtns[4].classList.add('active');
                    break;

        
            default:
                break;
        }
    }

    const newUserMessage = function (userName) {

       const message = `<div class="alert alert-success">
       User ${userName} has been successfully created
       </div>`
       newUser.children[0].insertAdjacentHTML('afterbegin', message); 
       
    }

    return {
        callnewUserMessage: function (userName) {
            newUserMessage(userName); 
        },
        callSetMainSection: function (id) {
            setMainSection(id); 
        },
    }
})();
