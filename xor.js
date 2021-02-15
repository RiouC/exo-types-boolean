
let a = false;
let b = true;

function xor(a, b) {
    return (a || b) && !(a && b)
}

console.log(xor(a, b));

