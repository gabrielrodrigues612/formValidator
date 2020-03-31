const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const form = document.getElementById("form");

form.addEventListener("submit", submeter);

function submeter(e) {
  e.preventDefault();
  confirmUser([email, username, password, passwordConfirm]);
  verificarSenha(passwordConfirm, password);
}

function verificarSenha(passwordConfirm, password) {
  if (
    (passwordConfirm.value == password.value) &
    (passwordConfirm.value != "") &
    (password.value != "")
  ) {
    const parentSenha1 = password.parentNode;
    parentSenha1.setAttribute("class", "form-control success");
    const parentSenha2 = passwordConfirm.parentNode;
    parentSenha2.setAttribute("class", "form-control success");
  } else {
    const parentUser = passwordConfirm.parentNode;
    const small = parentUser.querySelector("small");
    small.innerHTML = `A senha não é igual à anterior`;
    parentUser.setAttribute("class", "form-control error");
  }
}

function confirmUser(valores) {
  valores.forEach(variavel => {
    if (variavel.value === "") {
      const parentUser = variavel.parentNode;
      const small = parentUser.querySelector("small");
      small.innerHTML = `${variavel.id} é preciso`;
      parentUser.setAttribute("class", "form-control error");
    } else if (variavel.id === "email") {
      if (validateEmail(variavel.value) === false) {
        const parentUser = variavel.parentNode;
        const small = parentUser.querySelector("small");
        small.innerHTML = `Ponha um ${variavel.id} válido`;
        parentUser.setAttribute("class", "form-control error");
      } else {
        const parentUser = variavel.parentNode;
        parentUser.setAttribute("class", "form-control success");
      }
    } else {
      const parentUser = variavel.parentNode;
      parentUser.setAttribute("class", "form-control success");
    }
  });
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
