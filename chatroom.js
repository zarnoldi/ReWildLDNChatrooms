// Chatroom Constructor

export class Chatroom {

    constructor(name, owner, date){
        this.name = name;
        this.owner = owner;
        this.users = [];
        this.posts = [];
        this.dateCreated = date; 
    };

    register(user){
        this.users.push(user);
        user.chatroom = this;
    }; 

}