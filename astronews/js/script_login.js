class Login{

    constructor() {
        this.validations = [
            'data-required',
            'data-email-validate',
        ]

    }

    validate(form){
        //resgata todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length>0){
            this.cleanValidations(currentValidations);
        }

        //pegar os inputs
        let inputs = form.getElementsByClassName('conta');

        //transformando HTMLCollections -> array

        let inputsArray = [...inputs];

        console.log(inputsArray);

        //loop nos inputs e validações mediante ao que for encontrado
        inputsArray.forEach(function(input){
            //console.log(input);

            for(let i=0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    
                    //data-min-length -> minlength; limpando a string para virar um método
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //invoca o método
                    this[method](input, value);

                }
            }
        }, this);

    }

    //mostra mensagem de erro na tela
    printMessage(input, msg){

        console.log("pritando mensagem");
        
        // quantidade de erros
        let errorsQty = input.parentNode.querySelector('.error-validation');

        if(errorsQty===null){
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }
    }


    //valida emails
    emailvalidate(input){
        
        console.log("validando email");

        //email@email.com
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = 'Insira um e-mail no padrão user@email.com';

        if(!re.test(email)){
            this.printMessage(input, errorMessage);
        }

    }

    //verifica se o input é requerido
    required(input){

        console.log("verificando se é obrigatório");

        let inputValue = input.value;

        if(inputValue===''){
            let errorMessage = `Este campo é obrigatório`;
            this.printMessage(input, errorMessage);
        }
    }

    //limpa as validações da tela
    cleanValidations(validations){
        validations.forEach(el => el.remove());
    }

}

let form = document.getElementById("login_form");
let submit = document.getElementById("btn-submit");

let login = new Login();

/// redireciona para a página inicial
function redireciona(){
    location.href="./php/login.php";
}

const formCadUsuario = document.getElementById("login_form");

window.onload = function(){
    console.log("página carregada");

    submit.addEventListener("click", async(e) =>{

        //console.log("funcionou");
        login.validate(form);

        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length>0){
            e.preventDefault();
        }
        
    });
}