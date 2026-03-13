const memo = {};
function power(base, exp) {
    let exponent = Math.abs(exp);
    let prod = 1;
    
    for(let i = 1; i<= exponent; i++) {prod *= base;}

    let negExp = (exp < 0) ? true : false;
    if(negExp == true) {prod = 1/prod;}
    
    return prod;
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));