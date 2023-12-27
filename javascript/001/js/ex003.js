function media1(n1, n2) {
  let media = (n1 + n2) / 2;

  return media;
}

function res(form) {
  let media = media1(parseFloat (form.nota1.value),(parseFloat(form.nota2.value)));

  if (media >= 7) {
    alert("Aprovado");
  } else if(media >= 4) {
    alert("Recuperação");
  } else{
    alert("Reprovado")
  }
}
