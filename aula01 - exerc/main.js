const form = document.getElementById('form-exerc1');

const campoA =document.getElementById('campoA')
const campoB =document.getElementById('campoB')


function validaCampos(campA, campB){
    
    return campB>campA;
}

form.addEventListener('submit',function(e){
    
    e.preventDefault();

    formEValido = validaCampos(campoA.value, campoB.value)

    if(formEValido){
        alert('Sucesso');
    }else{
        alert('Falha');
    }




})