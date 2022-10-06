var troca = false;
var estado = false;
var numero = false;
var acao = false;
var resultado_1 =''
var resultado_2 =''

function inserir(valor){
    if (numero===false){
    visor_baixo.innerHTML+=valor;
    troca = true;
}}

function aplicar(valor){
    if(acao===false){ 
    if(numero == true){
    if(estado == false){
    visor_baixo.innerHTML+=valor;
    trocar();
    numero = false;
   } else{
    visor_cima.innerHTML+=valor;
    trocar();
    estado = false;
    numero = false;
   }
}
}else{
    visor_cima.innerHTML='';
    visor_cima.innerHTML+=visor_baixo.innerHTML;
    visor_baixo.innerHTML='';
    visor_cima.innerHTML+=valor;
    acao=false;
    numero=false;

}
}


function trocar(){
    if(visor_baixo.textContent){
    visor_cima.innerHTML+=visor_baixo.innerHTML;
    }
    visor_baixo.innerHTML ='';
    troca = true;
}

function deletar(){
    if(visor_baixo.textContent){
        let resultado = document.getElementById('visor_baixo').innerHTML;
        visor_baixo.innerHTML= resultado.substring(0,resultado.length -1);
    } else {
        let resultado = document.getElementById('visor_cima').innerHTML;
        visor_cima.innerHTML= resultado.substring(0,resultado.length -1);
    }
}

function limpar(){
    if (visor_baixo.textContent){
    visor_baixo.innerHTML = '';
  }else{
    visor_cima.innerHTML = '';
  }
  troca = false;
  estado = false;
  numero = false;

}

function quadrado(){
    if (visor_baixo.textContent){
    let quadrado_x = document.getElementById('visor_baixo').innerHTML;
    visor_cima.innerHTML+=(document.getElementById('visor_baixo').innerHTML+'<sup>' +2+ '</sup>');
    visor_baixo.innerHTML='';
    visor_baixo.innerHTML+=quadrado_x*quadrado_x;
    
    acao = true  
}
}
function igual(){
    if (acao===false){
        if(troca===true){
        visor_cima.innerHTML+=visor_baixo.innerHTML;
        document.getElementById('visor_baixo').innerHTML = eval(visor_cima.innerHTML); 
        troca=false
        estado=true
     } else if (visor_cima.textContent){
        document.getElementById('visor_baixo').innerHTML = eval(visor_cima.innerHTML); 

     }
    }else{
        visor_cima.innerHTML='';
        visor_cima.innerHTML+=visor_baixo.innerHTML;
        visor_baixo.innerHTML='';
        acao=false;
        numero=true;
    }
}
