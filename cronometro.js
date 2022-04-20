let sec = 00;
let min =00;
let hr = 00;
let segundos = document.querySelector('#segundos');
let minu = document.querySelector('#minu');
let hora = document.querySelector('#horas');

function incio(){
    inicia = setInterval(contagem,1000)
  

}
function contagem(){
    if(sec <= 9){
        segundos.textContent = ('0'+sec); 
        sec++ 
    }
    else  if (sec>=9,sec<=59){
        segundos.textContent = (sec);
        sec++ 
       }
    else if (sec = 59){
      sec = 0;
      segundos.textContent = ('0'+sec);
      if(min <= 9){
      minu.textContent = ('0'+min);
      min++
    }
    else  if (min>=9,min<=59){
        minu.textContent = (min);
        min++ 
       }
       else if (min = 59){
        min = 0;
        minu.textContent = ('0'+min);
        sec = 0;
        segundos.textContent = ('0'+sec);
        if(hr <= 8){
            hr++
        hora.textContent = ('0'+hr);
       
      }
      else  if (hr>=9,hr<59){
        hr++ 
          hora.textContent = (hr);
          
         }
         else if(hr=60){
             clearInterval(inicia)
             segundos.textContent = ('0'+sec);
             minu.textContent = ('0'+min);
             hora.textContent = ('0'+hr);
         }
         
      } 
    }    
   
}
function parar(){
    clearInterval(inicia)
}
function zerar(){
    clearInterval(inicia)
    segundos.textContent = ('00');
    minu.textContent = ('00');
    hora.textContent = ('0'+hr);
}