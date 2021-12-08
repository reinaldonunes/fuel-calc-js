const showResult = document.querySelector(".boxResult");

function setEmptyResult(){
    const spanEmpty = document.createElement('span');
    spanEmpty.classList.add('noResult');
    spanEmpty.textContent = "Preencha todos os campos ser efetuado o cálculo.";
    showResult.appendChild(spanEmpty);
}

function fuelCalculate(distance, media, price){
    let pricePerKm = price / media;
    let totalPrice = pricePerKm * distance;
    let liters = totalPrice / price;

    let loading = document.createElement('span');
    loading.classList.add('loading');
    showResult.appendChild(loading);

    setTimeout(function(){
        const deleteSpan = document.querySelector(".loading");
        if(deleteSpan.parentNode){deleteSpan.parentNode.removeChild(deleteSpan);}

        const div = document.createElement('div');
        div.classList.add("contentResult");

        const h6 = document.createElement("h6");
        h6.textContent = "Seu veículo gasta (R$ por Km)";

        const rskm = document.createElement("span");
        rskm.classList.add("rskm");
        rskm.textContent = "R$ "+pricePerKm.toFixed(3);

        const h5 = document.createElement("h5");
        h5.textContent = "TOTAL DESLOCAMENTO";

        const rsdesloc = document.createElement("span");
        rsdesloc.classList.add("rsdesloc");
        rsdesloc.textContent = "R$ "+totalPrice.toFixed(3);

        const rslit = document.createElement("span");
        rslit.classList.add("rslit");
        rslit.textContent = "ou " + liters.toFixed(2) + " litro(s).";

        const base = document.createElement("span");
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

function goResult(){
    var kmtotal = document.querySelector("#distance").value;
    var mediavehicle = document.querySelector("#media").value;
    var pricefuel = document.querySelector("#price").value;

    if(!kmtotal || !mediavehicle || !pricefuel){
        alert("Preencha os campos corretamente!");
        return false;
    }else{
        const showAreaCalc = showResult.querySelector(".contentResult");

        if(showAreaCalc == null){
            var deleteSpan = document.querySelector(".noResult");
            if(deleteSpan.parentNode){deleteSpan.parentNode.removeChild(deleteSpan);}

            fuelCalculate(kmtotal, mediavehicle, pricefuel);
        }else{
            showResult.removeChild(showAreaCalc);
            fuelCalculate(kmtotal, mediavehicle, pricefuel);
        }
    }



    /*
    if(!distance || !media || !price){
        alert("Preencha os campos corretamente.");
    }else{

        teste(distance,media,price);

        pricePerKm = price / media;
        totalPrice = pricePerKm * distance;
        liters = totalPrice / price;



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
    */
}