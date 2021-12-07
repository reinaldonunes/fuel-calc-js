var showResult = document.querySelector(".boxResult");

function setEmptyResult(){
    var spanEmpty = document.createElement('span');
    spanEmpty.classList.add('noResult');
    spanEmpty.textContent = "Preencha todos os campos ser efetuado o cálculo.";
    showResult.appendChild(spanEmpty);
}

function goResult(){
    var distance = document.querySelector("#distance").value;
    var media = document.querySelector("#media").value;
    var price = document.querySelector("#price").value;

    if(!distance || !media || !price){
        alert("Preencha os campos corretamente.");
    }else{
        var pricePerKm = price / media;
        var totalPrice = pricePerKm * distance;
        var liters = totalPrice / price;


        var loading = document.createElement('span');
        loading.classList.add('loading');
        var deleteSpan = document.querySelector(".noResult");
        if(deleteSpan.parentNode){deleteSpan.parentNode.removeChild(deleteSpan);}
        
        showResult.appendChild(loading);
        
        setTimeout(function(){
            var deleteSpan = document.querySelector(".loading");
            if(deleteSpan.parentNode){deleteSpan.parentNode.removeChild(deleteSpan);}

            var div = document.createElement('div');
            div.classList.add("contentResult");

            var h6 = document.createElement("h6");
            h6.textContent = "Seu veículo gasta (R$ por Km)";

            var rskm = document.createElement("span");
            rskm.classList.add("rskm");
            rskm.textContent = "R$ "+pricePerKm.toFixed(3);

            var h5 = document.createElement("h5");
            h5.textContent = "TOTAL DESLOCAMENTO";

            var rsdesloc = document.createElement("span");
            rsdesloc.classList.add("rsdesloc");
            rsdesloc.textContent = "R$ "+totalPrice.toFixed(3);

            var rslit = document.createElement("span");
            rslit.classList.add("rslit");
            rslit.textContent = "ou " + liters.toFixed(2) + " litro(s).";

            var base = document.createElement("span");
            base.classList.add("baseCalc");
            base.textContent = "Base de cálculo: (Preço / Média) * KM Total";

            div.appendChild(h6);
            div.appendChild(rskm);
            div.appendChild(h5);
            div.appendChild(rsdesloc);
            div.appendChild(rslit);
            div.appendChild(base);

            showResult.appendChild(div);
        },500)

        

    }
}




/*


var resultArea = document.querySelector("#resultCalcArea")
resultArea.style.display = 'none';

function getDistance(){
    var distanceKm = document.querySelector("#distance").value;
    let nextElement = document.querySelector("#media");
    if(distanceKm != ''){
        nextElement.removeAttribute('readonly');
    }
}

function getMedia(){
    var media = document.querySelector("#media").value;
    let nextElement = document.querySelector("#price");
    if(media != ''){
        nextElement.removeAttribute('readonly');
    }
}

function getPrice(){
    var price = document.querySelector("#price").value;
    var costDisplay = document.querySelector("#cost");
    if(price != ''){
        let km = document.querySelector("#distance").value;
        let med = document.querySelector("#media").value;

        let calc = km/med;
        let total = price*calc;
        
        costDisplay.value = "R$ "+calc.toFixed(3);

        resultArea.style.display = 'flex';
        resultArea.children[1].innerHTML = 'R$ '+total.toFixed(3);
    }
}
*/