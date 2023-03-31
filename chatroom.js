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

    unregister(user){
        // loop through array of users to match user.name with users.user.name
        // Get index of matching user
        // Call splice method to remove user 
        // Assign returned array to value of users
    }

}