let Confirm_Register = confirm("Bienvenido, desea registrarse?");
let Name_user;
let Flag_User = new Boolean(false);
let Name_Pass;
let Flag_Pass = false;

const User = () => {
  if (Confirm_Register == true) {
    let Name_user = prompt("Ingrese nombre de usuario?", "Más de 3 caracteres");

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

const Pass = () => {
  if (Flag_User == true) {
    let Name_Pass = prompt("Ingrese contraseña nueva?", "Más de 6 caracteres");
    console.log("password " + Name_Pass)

    if (Name_Pass.length > 6) {
     
       
        Flag_Pass = true;
      } else {
      alert("ingrese una contraseña valida");
      Flag_Pass = false;
      console.log("password " + Name_Pass)
    }
  }
};

User();

console.log("flag user " + Flag_User);

while (Flag_User == false) {
  User();
}
console.log("flag user " + Flag_User);
Pass();

console.log("flag pass " + Flag_Pass);

while (Flag_Pass == false) {
  Pass();
}

console.log("flag pass " + Flag_Pass);
