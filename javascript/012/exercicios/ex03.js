const userLogin = false;
const userAdmin = true;

let userPermissao;

if (!userLogin) {
  userPermissao = 'Você não está logado.';
} else if (!userAdmin) {
  userPermissao = 'Você não tem permissão de administrador.';
} else {
  userPermissao = 'Você tem permissão.';
}

console.log(userPermissao); 
