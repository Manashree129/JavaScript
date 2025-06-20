const user = {
    username: "manashree",
    id: 1,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

//"this" refers to current context

// user.welcomeMessage()

// user.username ="sam"
// user.welcomeMessage()
console.log(this)
    }



