
userdetails = {
    "Akhil": { uname: "Akhil", password: "2020" },
    "Paul": { uname: "Paul", password: "2021" }
}


function setdetails() {

    localStorage.setItem("database", JSON.stringify(userdetails))
}

function togetdetails() {

    userdetails = JSON.parse(localStorage.getItem('database'))
}

function register() {
    let username = runame.value;

    let password = rpswd.value;
    
togetdetails()
    

    if(username in userdetails) {
        alert("User already exists")
    }

    else if(username==""){
        alert("Please fill the form")
    }
    else{
        userdetails[username] = {
            uname: username, password
        }

        console.log(userdetails);

        setdetails()

        alert("Registered succesfully")

        window.location = "index.html"

    }




}

function login(){

    let username= uname.value;

    let password= pswd.value;

    togetdetails()

    if(username in userdetails){
        if(password==userdetails[username].password){

            localStorage.setItem("username",username)

            window.location ="home.html"

            alert("login succesfull")
        }
        else{
            alert("invalid username or password")
        }
    }

    else{
        alert("invalid username or password")
    }
}


var loginuser=localStorage.getItem("username")

user.innerHTML=loginuser

function logout(){

    localStorage.removeItem("username")
    Window.location= "index.html"
}

if(!localStorage.getItem("username")){
    alert("please login")

    window.location="index.html"
}



