class Validator{

    constructor() {
        this.validations = [
            'data-required',
            'data-min-length', 
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            'data-equal',
            'data-password-validate',
            'check-required'
        ]
    }

    //iniciar a validação de todos os campos

    validate(form){
        //resgata todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length>0){
            this.cleanValidations(currentValidations);
        }

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        //transformando HTMLCollections -> array

        let inputsArray = [...inputs];

        //console.log(inputsArray);

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

    //verifica se um input tem um número mínimo de caracteres
    minlength(input, minValue){
        //console.log(input);
        //console.log(minValue);

        let inputLength = input.value.length;
        
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue){
            //console.log(errorMessage);
            this.printMessage(input, errorMessage);
        }
    }

    //verifica se um input passou do limite de caracteres
    maxlength(input, maxValue){
        let inputLength = input.value.length;
        
        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if(inputLength > maxValue){
            //console.log(errorMessage);
            this.printMessage(input, errorMessage);
        }
    }

    //valida emails
    emailvalidate(input){
        
        //email@email.com
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = 'Insira um e-mail no padrão user@email.com';

        if(!re.test(email)){
            this.printMessage(input, errorMessage);
        }

    }

    //valida nome com apenas letrass
    onlyletters(input){
        
        let re = /^[A-Za-z ]+$/;

        let inputValue = input.value;

        let errorMessage = "Este campo não aceita números e caracteres especiais";

        if(!re.test(inputValue)){
            this.printMessage(input, errorMessage);
        }

    }

    //verifica se dois campos são iguais
    equal(input, inputName){
        
        let inputCompare = document.getElementsByName(inputName)[0];

        let errorMessage = `Certifique-se de usar a mesma senha`;

        if(input.value != inputCompare.value){
            this.printMessage(input, errorMessage);
        }

    }

    //valida o campo de senha
    passwordvalidate(input){
        //explodir string em um array

        let charArr = input.value.split("");
        
        let uppercases = 0;
        let numbers = 0;

        for(let i = 0; charArr.length > i; i++){
            if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
                uppercases++;
            }else if(!isNaN(parseInt(charArr[i]))){
                numbers++;
            }
        }

        if(uppercases===0 || numbers ===0){
            let errorMessage = `A senha precisa de pelo menos um caracter maísculo e um número`;
            this.printMessage(input, errorMessage);
        }
    }

    //mostra mensagem de erro na tela
    printMessage(input, msg){
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
    
    //verifica se o input é requerido
    required(input){
        let inputValue = input.value;

        if(inputValue===''){
            let errorMessage = `Este campo é obrigatório`;
            this.printMessage(input, errorMessage);
        }
    }

    checkrequired(input){
        if(!input.checked){
            alert("Confirme que aceita os termos de uso");
        }
    }

    //limpa as validações da tela
    cleanValidations(validations){
        validations.forEach(el => el.remove());
    }

}

let form = document.getElementById("register_form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que dispara as validações

window.onload = function(){
    console.log("página carregada");

    submit.addEventListener("click", function(e){
        e.preventDefault();

        //console.log("funcionou");
        validator.validate(form);
    });
}