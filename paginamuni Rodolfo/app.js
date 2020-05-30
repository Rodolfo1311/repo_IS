function registrar(){
    console.log("diste un clic");
    var email= document.getElementById('email').value;
    var contra = document.getElementById ('contra').value;
    console.log(email);
    console.log(contra);

    firebase.auth().createUserWithEmailAndPassword(email, contra)
    .then(function(){
        verificar()
    })
    .catch(function(error)
     {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        // ...
      });
}

function ingresar(){
    console.log("diste un clic");
    var email2= document.getElementById('em').value;
    var contra2 = document.getElementById ('contras').value;
    console.log(email2);
    console.log(contra2);

    firebase.auth().signInWithEmailAndPassword(email2, contra2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function observador(){
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('alguien entro');
      apa(user)
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      console.log(emailVerified);
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no hay nadie adentro');
      // ...
    }
  });
}
observador();

function apa(user){
    var usuario = user;
    var apa = document.getElementById('hola');
    if(user.emailVerified){
    apa.innerHTML=`<a href="privilegido.html">Empezar</a>
    <button onclick="cerrar()">cerrar cesion</button>`;
    }
}

function cerrar(){
    firebase.auth().signOut()
    .then(function() {
        console.log('Sign-out successful.'); 
      })
      .catch(function(error) {
        console.log('An error happened');
      });
}

function verificar(){
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('enviando correo');
}).catch(function(error) {
  // An error happened.
  console.log('no me envie');
});
}