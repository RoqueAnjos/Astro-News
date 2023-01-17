/*
@author: Roque Anjos
29/12/2022

Aprendendo JavaScript

Palavras-chave para declarar variáveis:
-> var
-> let
-> const
*/

/* criando e usando objetos
const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function(){
        alert("Biiiiiiiiiii");
    },
    completo: function(){
        return "A marca é "+this.marca + " e o ano é "+this.modelo;
    }
};
console.log(carro.completo());
*/


/*eventos de clique

onclick -> disparado quando recebe um clique
ondblclick -> disparado quando clique duplo
onmouseover -> disparado quando o mouse está sobre
onmouseout -> disparado quando o mouse é movido para fora do elemento
onmousemove -> disparado quando o mouse é movido no elemento
onmousedown -> disparado quando o clique do botão foi pressionado
onmouseup -> disparado quando o clique do botão é liberado
onfocus -> disparado quando o elemento recebe o foco.
onchange -> disparado quando existe mudança no conteúdo. 
onblur -> disparado quando o elemento perde o foco
onkeydown -> disparado qundo uma tecla é pressionada
onkeypress -> disparado qunado uma tecla é pressionada e solta.
onkeyup -> disparado quando uma tecla é solta sobre um elemento
onload -> disparada quando a página terminou de ser carregada. body
onresize -> disparado quando há um redimensionamento na tela.

*/

/*
function eventoClick(){ //disparado quando recebe um clique 
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert("Evento de clique duplo");
}

function viraVermelho(){ 
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){ 
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){ 
    let p = document.getElementById("texto");
    p.append("O mouse moveu<br>");
}
*/

/* trabalhando com arrays
const list = ["arroz", "feijão", "macarrão", "leite"];
var item1 = "arroz"
var item2 = "feijão"
var item3 = "macarrão"
var item4 = "leite"

const list = new Array("arroz", "feijão", "macarrão", "leite");

const x = ["roque"];

alert(Array.isArray(x));
*/

//list.join(" * "); //adiciona caracteres entre os elementos do array
//list.pop(); //remove o último elemento
//

/* teste de uma função no javascript

//exibe uma mensagem em uma seção de saída de depuração especial do documento
//Se o documento não contém esta seção, cria uma
function debug(msg){
    // Localiza a seção de depuração do documento examinando os atributos de identificação HTML
    var log = document.getElementById("debuglog");

    //se não existe elemento algum com identificação "debuglog", cria um.

    if(!log){
        log = document.createElement("div");// Cria um novo elemento <div>
        log.id = "debuglog";// Define o atributo de identificação HTML nele

        log.innerHTML = "<h1>Debug Log</h1>";//Define o conteúdo inicial
        document.body.appendChild(log);// Adiciona-o no final do documento
    }

    // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
    var pre = document.createElement("pre"); // Cria uma marca <pre>
    var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
    pre.appendChild(text); // Adiciona o texto no <pre>
    log.appendChild(pre); // Adiciona <pre> no log
}
debug("Mensagem do log");
*/
var x=1;

[x,x+1,x+2].forEach(console.log);