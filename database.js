function scrubPassword(user){
    if(user){
        delete user.password;
    }
    return(user);
}
class Database{
    constructor(db) {
        this.db = db;
    }
    createUser(user){ 
        if(!user.email) return Promise.reject("Email is required") ;
        else if(!user.first_name) return Promise.reject("First name is required");
        else if(!user.password) return Promise.reject("Password is required");
        else return this.db.users.save(user)
            .then(scrubPassword);
    }
    getUser(userId){
        return this.db.users.findOne({id: userId})
        .then(scrubPassword);
    }
    getUserByEmail(userEmail){
        return this.db.users.findOne({email: userEmail})
        .then(scrubPassword);
    }
  
}

module.exports = Database;
