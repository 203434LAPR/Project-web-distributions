addEventListener("keypress",(function(e){
    if(e.keyCode==13){
      menu(1);
    }
  }))

function menu(tipo){
    let imprimir= document.getElementById("resultado");
    let z;
    
    z=operacion(tipo);
    imprimir.innerHTML=z.toFixed(2)+"%";
}

function operacion(tipo){
    let x= document.getElementById("x").value;
    let x2= document.getElementById("x2").value;
    let x3= document.getElementById("x3").value;
    let x4= document.getElementById("x4").value;
    let media= document.getElementById("media").value;
    let dEstandar= document.getElementById("dEstandar").value;
    let z;
    let lDecimal;
    let resultado;
    let numero;
    let re1;
    let re2;
    
    switch(tipo){
        case 1:
            lDecimal=(x-media)/dEstandar;
            z= lDecimal.toFixed(2);
            if(z<0){
                //esta del lado izquierdo
                numero=verificacion(z*-1);
                resultado= (0.5+numero)*100;
                console.log(resultado.toFixed(2)+"%");
            }
            else{
                //de lado derecho
                numero=verificacion(z);
                resultado= (((0.5+numero)-1)*-1)*100;
                console.log(resultado.toFixed(2)+"%");
            }
        break;
        case 2:
            lDecimal=(x2-media)/dEstandar;
            z= lDecimal.toFixed(2);
            if(z<0){
                //esta del lado izquierdo
                numero=verificacion(z*-1);
                resultado= (1-(0.5+numero))*100;
                console.log(resultado.toFixed(2)+"%");
            }
            else{
                //de lado derecho
                numero=verificacion(z);
                resultado= (0.5+numero)*100;
                console.log(resultado.toFixed(2)+"%");
            }
        break
        case 3:
            lDecimal=(x3-media)/dEstandar;
            z= lDecimal.toFixed(2);
            if(z<0){
                //esta del lado izquierdo
                numero=verificacion(z*-1);
                re1= (numero);
                re1.toFixed(2);
            }
            else{
                //de lado derecho
                numero=verificacion(z);
                re1= ((numero-1)*-1);
                re1.toFixed(2);
            }
            lDecimal=(x4-media)/dEstandar;
            z= lDecimal.toFixed(2);
            if(z<0){
                //esta del lado izquierdo
                numero=verificacion(z*-1);
                re2= (1-numero);
                re2.toFixed(2);
            }
            else{
                //de lado derecho
                numero=verificacion(z);
                re2= (numero);
                re2.toFixed(2);
            }
            resultado= (re1+re2)*100;
        break;
    }
    return resultado;
    

}

