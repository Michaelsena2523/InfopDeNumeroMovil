
const resultado = document.getElementById("infoMostral");
const search = document.getElementById("search");
const btn = document.getElementById("btn");
const numero = document.getElementById("numero");
const validar = document.getElementById("validar");
const code = document.getElementById("code");
const continente = document.getElementById("continente");
const prefix = document.getElementById("prefix");
const lugar = document.getElementById("location");
const ciduda = document.getElementById("ciduda");
const cuerpo = document.querySelector('.caja');




function evaluar(numero) {
    const urlcel = `https://phonevalidation.abstractapi.com/v1/?api_key=3aaed7e48e72470da89dc732b4a54ec1&phone=${numero}`;
    fetch(urlcel)
        .then(info => info.json())
        .then(resul => inforesultado(resul))
        .catch(error => console.error(error))
};


  btn.addEventListener("click", (e) => {
    e.preventDefault();
    evaluar(search.value);
    cuerpo.style.display = 'block'
    
  });




  function inforesultado(info) {
   numero.textContent =" Status de numero: "+ JSON.stringify(info.phone);
   validar.textContent ="Status de numero: "+ JSON.stringify(info.valid);
   code.textContent ="Code del pais:"+ JSON.stringify(info.country.code);
   continente.textContent ="Continente donde esta Numero: "+ JSON.stringify(info.country.name);
   prefix.textContent =" Numero Prefix De Pais:"+ JSON.stringify(info.country.prefix);
   lugar.textContent ="Ubicacion del numero:"+ JSON.stringify(info.location);
   ciduda.textContent ="Provedor del numero:"+ JSON.stringify(info.carrier);

};




 