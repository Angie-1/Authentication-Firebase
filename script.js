function signUp(){
    var UserName = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value

    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(function(mtu){
        console.log(mtu) 
        console.log(mtu.user)  
    //     userName = mtu.user.name
    //     uid = mtu.user.uid
    //     mail = mtu.user.email
    //     verified = mtu.user.emailVerified

    // firebase.database().ref("users/"+uid).set({
    //     userName: userName,
    //     userId: uid,
    //     
    //     verified: mtu.user.emailVerified

    x = mtu.user.uid
    firebase.database().ref("users/"+x).set({
        UserName,
        email

    },(err)=>{if(err){
        console.log("no data sent")
    }else{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
               var uid = user.uid;
               window.location="dash.html" 
            }else{
                console.log("sign up")
            }
        })
    }})

    }, (error)=>{
        if(error){
            console.log(error)

        }else{
            console.log("user registered successfully")
        }
    })
    // })
    }

