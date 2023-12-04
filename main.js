
//Variavies de escopo global - que vão ser usadas em todo código

const form = document.getElementById('form-atividade')
let linhas = '';
const contatos = [];
const numeros = [];


//Ação tomada assim que o botão dentro do form for apertado
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');   

    //if para não permitir atividades iguais
    if ((numeros.includes(inputNumeroContato.value))){

        alert(`O numero: ${inputNumeroContato.value} já foi adicionado.`) 
    } else{
        
        //Aqui será concatenado dentro da váriavel linha vários valores diferentes
    
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputNumeroContato.value}</td>`
        linha += '</tr>'
        linhas += linha 
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    //Aqui adicionamos o valor de linhas no HTML
    corpoTabela.innerHTML = linhas;
}



