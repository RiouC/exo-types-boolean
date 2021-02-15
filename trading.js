
function tradeBTC(price) {
    if (price < toBuy) {
	buyBTC();
    } else if (price > toSell) {
	sellBTC();
    } else {
	console.log("Ne rien faire pour l'instant");
    }
}

function buyBTC() {
    console.log("Il faut acheter !");
}

function sellBTC() {
    console.log("On empoche les gains !");
}

var arguments = process.argv
let price = parseInt(arguments[2]);
let toBuy = parseInt(arguments[3]);
let toSell = parseInt(arguments[4]);

if ((price == arguments[2]) && (toBuy == arguments[3]) &&  (toSell == arguments[4])) {
    tradeBTC(price);
} else {
    console.log("La valeur entrée n'est pas un nombre !");
}

