// Capturando os elementos pelo ID
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.getElementById("lista-nao-ordenada");
const link = document.getElementById("link");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo aos elementos
titulo.innerText = "Título da Página";
link.innerText = "Link para Proz Educação";

// Adicionando itens na lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens na lista ordenada com links usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://example.com">Link 1</a></li>
    <li><a href="https://example.org">Link 2</a></li>
    <li><a href="https://example.net">Link 3</a></li>
`;