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