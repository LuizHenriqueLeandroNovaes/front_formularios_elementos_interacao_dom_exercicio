const h1 = document.querySelector("h1");
const form = document.querySelector("form");

const nome = document.querySelector("#nome");
const Email = document.querySelector("#email");
const age = document.querySelector("#ano");
const Senha = document.querySelector("#senha");

const cursos = document.querySelectorAll('input[type="checkbox"]');
const cidades = document.querySelector('select');
const periodos = document.querySelectorAll('input[type="radio"]');
const erro = document.querySelector("#erro");

let numeros = "0123456789", Letras = "abcdefghijklmnopqrtuvwxyz" ;

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    console.log("OK");

    erro.textContent = "" ;

    const verify_age = 2022 - age.value ;

    console.log(age.value) ;

    if(verify_age < 18 || !age.value){
        erro.textContent = "Você é menor de idade" ;
        return ;
    }

    let atual_cidade = cidades.options[cidades.selectedIndex].value;

    if(atual_cidade === "empty"){
        erro.textContent = "Voce precisa selecionar uma cidade !" ;
        return ;
    }

        let verificar_cursos = [] ;

        for(let curso of cursos){
            if(curso.checked){
                verificar_cursos.push(curso.name);
            }
        }

        if(!verificar_cursos.lenght === 0){
            erro.textContent = "Você prcisa selecionar um curso !" ;
            return ;
        }

        let Maiuscula = false , minuscula = false , numero = false ;

        for(let caracter of Senha.value){
            
            if(!Maiuscula && Letras.toUpperCase().indexOf(caracter) !== -1 ){
                Maiuscula = true ;
            }

            if(!minuscula && Letras.toLowerCase().indexOf(caracter) !== -1 ){
                minuscula = true ;
            }

            if(!numero && numeros.toUpperCase().indexOf(caracter) !== -1 ){
                numero = true ;
            }

        }

            if(!Maiuscula || !minuscula || !numeros){
                    erro.textContent = "A senha tem que ter letras minusculas ,e maiusculas ,e numeros" ;
                    return ;
                }

                let periodo_checado = "";
                
                for(let periodo of periodos){
                    if(periodo.checked){
                        periodo_checado = periodo.value;
                    }
                }


            const data = {
                Name : nome.value,
                Email : Email.value,
                Ano : age.value,
                Cidade : atual_cidade,
                Curso : verificar_cursos,
                Senha : Senha.value ,
                Periodo : periodo_checado
            }

            form.style.display = "none";
            h1.textContent = "Parabens, voces esta inscrito."

            console.log(data);
    
        })
