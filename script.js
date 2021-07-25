let Confirm_Register 
let Name_user;
let Flag_User = new Boolean(false);
let Name_Pass;
let Flag_Pass = false;

Confirm_Register = confirm("Bienvenido, desea registrarse?");

// Creacion de usuario
const User = () => {

  if (Confirm_Register == true) {
     Name_user = prompt("Ingrese nombre de usuario?", "Más de 3 caracteres");

    if (Name_user.length < 3 || Name_user === "Más de 3 caracteres") {
      alert("Debe tener max 3 caracteres");
      Flag_User = false;
    } else {
      Name_user = Name_user.toLowerCase();
    
      Flag_User = true;
    }
  } else {
    alert("Okey, no hay problema");
    Flag_User = false;
   
  }
  

};

//Creacion de password
const Pass = () => {
  if (Flag_User == true) {
    Name_Pass = prompt("Ingrese contraseña nueva?", "Más de 6 caracteres");
    console.log("password " + Name_Pass)

    if (Name_Pass.length > 6) {
     
       
        Flag_Pass = true;
      } else {
      alert("ingrese una contraseña valida");
      Flag_Pass = false;
      
    }
  }
  return Name_Pass;
};

// Indentificacion ok usuario
let User_ok=false
const Log_user = () => {
    if (Flag_User == true) {
      let User_log = prompt("Ingrese su usuario?");
      
      User_log=User_log.toLowerCase();
  
      if (User_log==Name_user) {
       
         
        User_ok = true;
        } else {
        alert("ingrese un usuario valida");
        User_ok = false;
        
      }
    }
  };

  

  //identificacion ok password
let Pass_ok=false
const Log_pass = () => {
    if (Pass_User == true) {
      let Pass_log = prompt("Ingrese su usuario?");
      
      Pass_log=Pass_log;
  
      if (Pass_log==Name_Pass) {
       
         
        Pass_ok = true;
        } else {
        alert("ingrese una contraseña valida");
        Pass_ok = false;
        
      }
    }
  };

//Programa de creacion de usario y pass
User();



while (Flag_User == false) {
  User();
}



console.log("usuario " + Name_user)

Pass();


console.log("password " + Name_Pass)

while (Flag_Pass == false) {
  Pass();
}

 alert("Iniciar Sesion");



    Log_user();

    while (User_ok == false) {
        Log_user();
      }

    Log_pass();


