firebase.auth().onAuthStateChanged((user) => {
    if(user){
        var uid = user.uid;
        console.log(uid)


        firebase.database().ref("users/"+uid).get()
        .then(function(data){
            console.log(data.val())
            if(data.exists()){
                var y =data.val()
                UserName.innerHTML = y.UserName
                email.innerHTML = y.email
            }else{
                console.log("there's no data")
            }
        })
    }
});
function signOut(){
    firebase.auth().signOut()
}
