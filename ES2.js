function es2_fattoriale(n){
    let fact = 1;
    let x = n;
    do {
        fact *= x--;
    } while(x > 1)
    console.log("Il fattoriale di %d è %d.", n, fact);
};

es2_fattoriale(11);

/*
Il fattoriale di 11 è 39916800.
*/